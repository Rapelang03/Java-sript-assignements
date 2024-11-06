import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LoginPage.css';
import logo from './wings.jpg'; // Adjust the path based on your structure

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login validation or actions here
    // Assuming validation is successful
    navigate('/inventory'); // Redirect to Page2 (inventory page)
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="Wings Cafe Logo" />
        <h1>Wings Cafe</h1>
      </div>
      <form onSubmit={handleLogin}>
        <h2>Log in to Wings Cafe</h2>
        <div className="input-group">
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email address or phone number" 
            required 
          />
        </div>
        <div className="input-group">
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
        </div>
        <button type="submit" className="login-btn">Log in</button>
        <div className="extra-links">
          <a href="#">Forgotten account?</a> · <a href="#">Sign up for Wings Cafe</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
