import './Navbar.css';import {assets} from '../../assets/admin_assets/assets';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img
        className='logo'
        src={assets.logo}
        alt='logo image'
      />
      <img
        src={assets.profile_image}
        className='profile'
        alt='profile'
      />
    </div>
  );
};

export default Navbar;
