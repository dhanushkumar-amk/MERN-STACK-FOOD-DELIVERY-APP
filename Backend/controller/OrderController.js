import orderModel from '../models/OrderModel.js';
import userModel from '../models/UserModel.js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRETKEY);

/** placing user order from frontend */
const placeOrder = async (req, res) => {
  const frontend_url = 'http://localhost:5137';
  try {
    const { userId, items, amount, address } = req.body;

    if (!userId || !items || !amount || !address) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const newOrder = new orderModel({
      userId,
      item: items,
      amount,
      address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = items.map((item) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80, // Assuming item.price is in INR
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: 'inr',
        product_data: {
          name: 'Delivery Charges',
        },
        unit_amount: 3 * 100 * 80, // Assuming delivery charge is 3 INR
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error('Error placing order:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export { placeOrder };
