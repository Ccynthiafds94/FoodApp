import React, { useState } from 'react';
import './auth.css';

const initialLoginState = {
  username: '',
  password: '',
};

const initialSignupState = {
  fullName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState(initialLoginState);
  const [signupForm, setSignupForm] = useState(initialSignupState);
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState('');

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateSignup = () => {
    const { fullName, email, username, password, confirmPassword } = signupForm;

    if (!fullName.trim()) {
      return 'Full name is required.';
    }

    if (!email.trim() || !email.includes('@')) {
      return 'Please enter a valid email address.';
    }

    if (!username.trim() || username.length < 3) {
      return 'Username must be at least 3 characters long.';
    }

    if (!password || password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }

    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }

    return '';
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { username, password } = loginForm;

    if (!username.trim() || !password.trim()) {
      setLoginError('Username and password are required.');
      return;
    }

    setLoginError('');
    alert('Login successful!');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const validationMessage = validateSignup();

    if (validationMessage) {
      setSignupError(validationMessage);
      setSignupSuccess('');
      return;
    }

    setSignupError('');
    setSignupSuccess('Account created successfully. You can now log in.');
    setSignupForm(initialSignupState);
  };

  const handleForgotPassword = () => {
    if (!loginForm.username.trim()) {
      setLoginError('Enter your username to reset your password.');
      return;
    }

    setLoginError('');
    alert(`Password reset link sent to the username: ${loginForm.username}`);
  };

  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <div className='auth-toggle'>
          <button
            type='button'
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            type='button'
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <form className='auth-form' onSubmit={handleLoginSubmit}>
            <h2>Welcome back</h2>
            <label>
              Username
              <input
                type='text'
                name='username'
                value={loginForm.username}
                onChange={handleLoginChange}
                placeholder='Enter your username'
              />
            </label>

            <label>
              Password
              <input
                type='password'
                name='password'
                value={loginForm.password}
                onChange={handleLoginChange}
                placeholder='Enter your password'
              />
            </label>

            <div className='auth-actions'>
              <button type='button' className='link-button' onClick={handleForgotPassword}>
                Forgot password?
              </button>
            </div>

            {loginError && <p className='auth-message error'>{loginError}</p>}
            <button type='submit' className='primary-button'>Login</button>
          </form>
        ) : (
          <form className='auth-form' onSubmit={handleSignupSubmit}>
            <h2>Create account</h2>

            <label>
              Full Name
              <input
                type='text'
                name='fullName'
                value={signupForm.fullName}
                onChange={handleSignupChange}
                placeholder='Enter your full name'
              />
            </label>

            <label>
              Email
              <input
                type='email'
                name='email'
                value={signupForm.email}
                onChange={handleSignupChange}
                placeholder='Enter your email'
              />
            </label>

            <label>
              Username
              <input
                type='text'
                name='username'
                value={signupForm.username}
                onChange={handleSignupChange}
                placeholder='Choose a username'
              />
            </label>

            <label>
              Password
              <input
                type='password'
                name='password'
                value={signupForm.password}
                onChange={handleSignupChange}
                placeholder='Create a password'
              />
            </label>

            <label>
              Confirm Password
              <input
                type='password'
                name='confirmPassword'
                value={signupForm.confirmPassword}
                onChange={handleSignupChange}
                placeholder='Re-enter your password'
              />
            </label>

            {signupError && <p className='auth-message error'>{signupError}</p>}
            {signupSuccess && <p className='auth-message success'>{signupSuccess}</p>}
            <button type='submit' className='primary-button'>Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
