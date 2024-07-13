import React from "react";

const UserNavbar = () => {
  return (
    <div className="navbar">
      <div className="user-info">
        <img src="user-image.jpg" alt="User" className="user-image" />
        <span className="user-name">John Doe</span>
      </div>
      <div className="menu">
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default UserNavbar;
