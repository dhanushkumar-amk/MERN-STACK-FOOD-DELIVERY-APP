import {useState} from 'react';import './LoginPopUp.css';
import {assets} from '../../assets/frontend_assets/assets';
const LoginPopUp = ({setShowLogin}) => {
  const [currentState, setCurrentState] = useState('Sign Up');

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt='cross icon'
          />
        </div>
        <div className='login-popup-input'>
          {currentState === 'Login' ? (
            <></>
          ) : (
            <input
              type='text'
              placeholder='Your name...'
              required
            />
          )}

          <input
            type='email'
            placeholder='Your email ...'
            required
          />
          <input
            type='password'
            placeholder='Your password...'
          />
        </div>
        <button>
          {currentState === 'Sign Up' ? 'Create Account' : 'Login In'}
        </button>
        <div className='login-popup-condition'>
          <input
            type='checkbox'
            required
          />
          <p>By Continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentState === 'Login' ? (
          <p>
            {' '}
            Create a new account?{' '}
            <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrentState('Login')}>Login here</span>{' '}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
