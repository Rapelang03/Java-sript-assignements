import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Dashboard.css'; // Import your custom styles

const Dashboard = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    // Perform logout actions here
    navigate('/login'); // Redirect to the login page after logging out
  };

  const goToInventory = () => {
    navigate('/inventory'); // Redirect to the inventory page
  };

  return (
    <div>
      <h1>WINGS CAFE DASHBOARD</h1>
      <div id="formpotion">
        <button className="dashboard-btn" onClick={goToInventory}>
          Go to Inventory
        </button>
      </div>

      <div id="tableright">
        <table id="tbl" className="table" border="1">
          <thead>
            <tr>
              <th>Inventory</th>
              <th>Sales</th>
              <th>Staff</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Manage Products</td>
              <td>View Reports</td>
              <td>Manage Staff</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      <div className="dashboard-footer">
        <button className="dashboard-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
