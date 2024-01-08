import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import './PagesCss/LoginPage.css'; // Ensure your CSS file path is correctly set

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating successful login
    // In a real application, this part would involve an API call to your backend
    // to validate the credentials and get the token/user information
    const token = 'some_dummy_token'; // Replace with actual token received from the server
    const userInfo = { email }; // Replace with user information received from the server

    // Store token and user info in localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    setIsLoggedIn(true);
  };

  // Check localStorage for authentication token on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      setEmail(userInfo.email);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    // Remove token and user info from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userInfo');
    setIsLoggedIn(false);
  };

  return (
    <div className='main_container_signup'>
      {isLoggedIn ? (
        <div className='header'>
          <div className='success-message'>
            Welcome to MINE-WINE {email} <Link to="/HomePage"> GoToHomepage </Link>
          </div>
          <button id='sign_up' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className='box'>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='box'>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
                    Don't Have an Account <Link to="/signup">Create Account</Link>
                </p>
          <button type="submit" id='sign_up'>Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
