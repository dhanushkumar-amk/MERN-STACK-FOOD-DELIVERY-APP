import './Navbar.css';
import {assets} from '../../assets/frontend_assets/assets';
import {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {StoreContext} from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState('home');
  const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img
          style={{cursor: 'pointer'}}
          src={assets.logo}
          alt='logo image'
          className='logo'
        />
      </Link>
      <ul className='navbar-menu'>
        <Link
          to='/'
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ' '}>
          Home
        </Link>
        <a
          href='#explore-menu'
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? 'active' : ' '}>
          Menu
        </a>
        <a
          href='#app-download'
          onClick={() => setMenu('mobile-app')}
          className={menu === 'mobile-app' ? 'active' : ' '}>
          Mobile App
        </a>
        <a
          href='#footer'
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ' '}>
          Contact us
        </a>
      </ul>

      <div className='navbar-right'>
        <img
          src={assets.search_icon}
          alt='search icon'
        />
        <div className='navbar-search-icon'>
          <Link to='/cart'>
            <img
              src={assets.basket_icon}
              alt='basket icon'
            />
          </Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img
              src={assets.profile_icon}
              alt='profile'
            />
            <ul className='nav-Profile-dropDown'>
              <li>
                <img
                  src={assets.bag_icon}
                  alt='bag'
                />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logOut}>
                <img
                  src={assets.logout_icon}
                  alt='log out'
                />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
