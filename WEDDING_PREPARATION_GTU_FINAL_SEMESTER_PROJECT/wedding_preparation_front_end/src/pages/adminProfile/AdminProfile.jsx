import React, { useState, useEffect } from "react";
import "./AdminProfile.css";
import axios from "axios"; // If using Axios for HTTP requests

const AdminProfile = () => {
  //   const [totals, setTotals] = useState(
  //     venue: 0,
  //     products: 0,
  //     users: 0,
  //     blogs: 0
  //   );

  //   useEffect(() =>
  //     // Fetch data from backend API
  //     axios.get('/api/admin/totals')
  //       .then(response =>
  //         setTotals(response.data);
  //       )
  //       .catch(error =>
  //         console.error('Error fetching data:', error);
  //       );
  //   , []);

  return (
    <div className="admin-profile">
      <div className="front-admin">
        <img src="../../../img/story-1.jpg" alt="Admin Profile" />
        <div className="second-admin">
          <div className="third-admin">
            <h6>Name :</h6>
            <p>Mukesh Solanki</p>
          </div>
          <div className="third-admin">
            <h6>Email :</h6>
            <p>mukesh@gmail.com</p>
          </div>
          <div className="third-admin">
            <h6>Phone :</h6>
            <p>+91 1234567890</p>
          </div>
          <div className="third-admin">
            <h6>Birth Date :</h6>
            <p>01/01/2000</p>
          </div>
          <div className="third-admin-button">
            <button className="edit-button">Update</button>
          </div>
        </div>
      </div>
      <h4>Admin</h4>
      <div className="totals">
        <div className="total-item">
          <h2>Total Venue</h2>
          <p>7</p>
        </div>
        <div className="total-item">
          <h2>Total Products</h2>
          <p>21</p>
        </div>
        <div className="total-item">
          <h2>Total Users</h2>
          <p>5</p>
        </div>
        <div className="total-item">
          <h2>Total Blogs</h2>
          <p>15</p>
        </div>
      </div>
      /* Add extra information or features here */
    </div>
  );
};

export default AdminProfile;
