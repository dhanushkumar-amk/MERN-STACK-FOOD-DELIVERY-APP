import {assets} from '../../assets/frontend_assets/assets';
import './Footer.css';
const Footer = () => {
  const year = new Date();
  return (
    <div
      className='footer'
      id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img
            src={assets.logo}
            alt='logo image'
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            iste, beatae quisquam reprehenderit cumque neque alias? Quis cum
            pariatur nostrum illo asperiores eum consequatur officiis.
          </p>
          <div className='footer-social-icons'>
            <img
              src={assets.facebook_icon}
              alt='social icons'
            />
            <img
              src={assets.twitter_icon}
              alt='social icons'
            />
            <img
              src={assets.linkedin_icon}
              alt='social icons'
            />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Get in touch</h2>
          <ul>
            <li>+9876543210</li>
            <li>Tomato@contact.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copy-right'>
        copyright {year.getFullYear()} © Dhanushkumar - All Rights Reserved{' '}
      </p>
    </div>
  );
};

export default Footer;
