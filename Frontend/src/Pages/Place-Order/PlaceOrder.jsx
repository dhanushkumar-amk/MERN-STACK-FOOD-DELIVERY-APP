import {useContext, useState} from 'react';import './PlaceOrder.css';
import {StoreContext} from '../../Context/StoreContext';
import axios from 'axios';
const PlaceOrder = () => {
  const {getTotalCartAmount, token, food_list, cartItems, url} =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({...data, [name]: value}));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo['quantity'] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 3,
    };
    let response = await axios.post(url + '/api/order/place', orderData, {
      headers: {token},
    });
    if (response.data.success) {
      // const {session_url} = response.data;
      // const frontend_url = 'http://localhost:5137';

      alert('order success');
      // window.location.replace(frontend_url);
      
      
    } else {
      alert('Error');
    }
  };
  return (
    <form
      onSubmit={placeOrder}
      className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input
            name='firstName'
            onChange={onChangeHandler}
            value={data.firstName}
            type='text'
            placeholder='First Name'
            required
          />
          <input
            name='lastName'
            onChange={onChangeHandler}
            value={data.lastName}
            type='text'
            placeholder='Last Name'
            required
          />
        </div>
        <input
          name='email'
          onChange={onChangeHandler}
          value={data.email}
          type='email'
          placeholder='Email address'
          required
        />
        <input
          name='street'
          onChange={onChangeHandler}
          value={data.street}
          type='text'
          placeholder='street'
          required
        />
        <div className='multi-fields'>
          <input
            name='city'
            onChange={onChangeHandler}
            value={data.city}
            type='text'
            placeholder='City'
            required
          />
          <input
            name='state'
            onChange={onChangeHandler}
            value={data.state}
            type='text'
            placeholder='State'
            required
          />
        </div>
        <div className='multi-fields'>
          <input
            name='pincode'
            onChange={onChangeHandler}
            value={data.pincode}
            type='text'
            placeholder='Pincode / zipcode'
            required
          />
          <input
            type='text'
            name='country'
            onChange={onChangeHandler}
            value={data.country}
            placeholder='country'
            required
          />
        </div>
        <input
          name='phone'
          onChange={onChangeHandler}
          value={data.phone}
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
          <button type='submit'>Proceed To Payment </button>
          <button type='submit'>Cash on delivery</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
