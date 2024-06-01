import {useContext, useState} from 'react';import {assets} from '../../assets/frontend_assets/assets';
import './FoodItem.css';
import {StoreContext} from '../../Context/StoreContext';
const FoodItem = ({id, name, price, description, image}) => {
  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className='food-item-image-container'>
        <img
          src={url + '/images/' + image}
          alt='food image'
          className='food-item-image'
        />
        {!cartItems[id] ? (
          <img
            className='add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt='add icon'
          />
        ) : (
          <div className='food-item-counter'>
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt='remove icon'
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt='add icon'
            />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img
            src={assets.rating_starts}
            alt='stars'
          />
        </div>

        <p className='food-item-description'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
