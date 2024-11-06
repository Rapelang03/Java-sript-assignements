import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from './wings.jpg';

const SignInPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Basic validation (e.g., check if password and confirm password match)
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Clear any previous error messages
    setErrorMessage('');

    // Redirect to login page after signing up
    navigate('/login');
  };

  return (
    <div className="signin-container">
      <div className="logo">
        <img src={logo} alt="Wings Cafe Logo" />
        <h1>Wings Cafe</h1>
      </div>
      <form onSubmit={handleSignIn}>
        <h2>Sign up for Wings Cafe</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="input-group">
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Full Name" 
            required 
          />
        </div>
        <div className="input-group">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email address" 
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
        <div className="input-group">
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirm Password" 
            required 
          />
        </div>
        <button type="submit" className="signin-btn">Sign Up</button>
        <div className="extra-links">
          Already have an account? <a href="#" onClick={() => navigate('/login')}>Log in here</a>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
