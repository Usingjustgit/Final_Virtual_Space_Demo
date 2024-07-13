import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="container">
      {/* <!-- Profile Picture --> */}
      <div className="row mt-5">
        <div className="col text-center">
          <img
            src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile Picture"
            className="img-fluid rounded-circle"
            style={{ width: "200px", aspectRatio: "1/1", objectFit: "cover" }}
          />
        </div>
      </div>
      {/* <!-- User Email --> */}
      <div className="row mt-3 fiels-of-profile">
        <div className="col text-center">
          <h3>User Name</h3>
          <p>Mukesh Solanki</p>
        </div>
      </div>
      {/* <!-- User Email --> */}
      <div className="row mt-3 fiels-of-profile">
        <div className="col text-center">
          <h3>User Email</h3>
          <p>user@example.com</p>
        </div>
      </div>
      {/* <!-- User Birth Date --> */}
      <div className="row mt-3 fiels-of-profile">
        <div className="col text-center">
          <h3>Birth Date</h3>
          <p>January 1, 1990</p>
        </div>
      </div>
      {/* <!-- User Hobbies --> */}
      <div className="row mt-3 fiels-of-profile">
        <div className="col text-center">
          <h3>Phone</h3>
          <p>+91 1234567890</p>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-primary bg-white p-2 mt-3 mx-auto hover-style"
          style={{
            border: "3px solid #fd5d5d",
            borderRadius: "11px",
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
