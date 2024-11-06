import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage'; // Import the login page
import Page2 from './Page2'; // Import the inventory page
import Dashboard from './Dashboard'; // Import the dashboard
import SignInPage from './SignInPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignInPage />} /> {/* Default route now set to SignInPage */}
                <Route path="/login" element={<LoginPage />} /> {/* Login page */}
                <Route path="/inventory" element={<Page2 />} /> {/* Inventory page */}
                <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard page */}
                <Route path="/sign-up" element={<SignInPage />} /> {/* Optional route for Sign Up */}
            </Routes>
        </Router>
    );
};

export default App;
