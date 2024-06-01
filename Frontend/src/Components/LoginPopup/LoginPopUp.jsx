import {useContext, useState} from 'react';import './LoginPopUp.css';
import {assets} from '../../assets/frontend_assets/assets';
import {StoreContext} from '../../Context/StoreContext';
import axios from 'axios';

const LoginPopUp = ({setShowLogin}) => {
  const {url, setToken} = useContext(StoreContext);
  const [currentState, setCurrentState] = useState('Sign Up');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({...data, [name]: value}));
  };

  const onLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission
    let newUrl = url;
    if (currentState === 'Login') {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register';
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className='login-popup'>
      <form
        onSubmit={onLogin}
        className='login-popup-container'>
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
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type='text'
              placeholder='Your name...'
              required
            />
          )}

          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type='email'
            placeholder='Your email ...'
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type='password'
            placeholder='Your password...'
          />
        </div>
        <button type='submit'>
          {currentState === 'Sign Up' ? 'Create Account' : 'Login In'}
        </button>
        <div className='login-popup-condition'>
          <input
            type='checkbox'
            required
          />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
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
