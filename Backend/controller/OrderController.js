import orderModel from '../models/OrderModel.js';
import userModel from '../models/UserModel.js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRETKEY);
/** placing user order from frontend */
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      item: req.body.items,
      amount: req.body.amount,
      address: req.boy.address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, {cartData: {}});
  } catch (error) {}
};

export {placeOrder};
