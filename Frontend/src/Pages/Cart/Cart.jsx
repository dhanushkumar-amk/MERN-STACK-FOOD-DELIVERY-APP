import {useContext} from 'react';import './Cart.css';
import {StoreContext} from '../../Context/StoreContext';
import {useNavigate} from 'react-router-dom';
const Card = () => {
  const {cartItems, food_list, removeFromCart, getTotalCartAmount} =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='cart-items-title cart-items-item'>
                  <img
                    src={item.image}
                    alt='item image'
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className='cross'
                    onClick={() => removeFromCart(item._id)}>
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Sub total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 3}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total</p>
              <p>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 3}
              </p>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>
            Proceed To CheckOut{' '}
          </button>
        </div>

        <div className='cart-promo-code'>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promo-code-input'>
              <input
                type='text'
                placeholder='promo code'
              />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
