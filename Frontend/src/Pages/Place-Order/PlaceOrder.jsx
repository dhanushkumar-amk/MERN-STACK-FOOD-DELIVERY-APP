import {useContext} from 'react';
import './PlaceOrder.css';
import {StoreContext} from '../../Context/StoreContext';
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input
            type='text'
            placeholder='First Name'
            required
          />
          <input
            type='text'
            placeholder='Last Name'
            required
          />
        </div>
        <input
          type='email'
          placeholder='Email address'
          required
        />
        <input
          type='text'
          placeholder='street'
          required
        />
        <div className='multi-fields'>
          <input
            type='text'
            placeholder='City'
            required
          />
          <input
            type='text'
            placeholder='State'
            required
          />
        </div>
        <div className='multi-fields'>
          <input
            type='text'
            placeholder='Pin Code'
            required
          />
          <input
            type='text'
            placeholder='country'
            required
          />
        </div>
        <input
          type='text '
          placeholder='Phone'
        />
      </div>
      <div className='place-order-right'>
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
          <button>Proceed To Payment </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
