import React from "react";
import "./AllUser.css"; // Import CSS file for styling
import { users } from "../../../TemporyData/user";

const AllUsers = () => {
  console.log(users);
  return (
    <div
      className="container-fluid gallery position-relative py-5"
      id="weddingGallery"
    >
      <div className="position-absolute" style={{ top: "-95px", right: "0" }}>
        <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
      </div>
      <div
        className="position-absolute"
        style={{ top: "-80px", left: "0", transform: "rotate(150deg)" }}
      >
        <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
      </div>
      <div className="container position-relative py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1
            className="display-2 text-dark"
            style={{
              marginTop: "-51px",
              fontSize: "50px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            All User
          </h1>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>User Profile</th>
                  <th>User Name</th>
                  <th>Role</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={user.image} alt="User" className="user-image" />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className="edit-btn">
                        <i class="fa fa-eye"></i>
                      </button>
                    </td>
                    <td>
                      <button className="edit-btn">
                        <i class="fa fa-edit"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() =>
                          alert(`Are you sure? ${user.name} will be deleted`)
                        }
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-center">
              <button
                className="btn bg-white"
                style={{
                  color: "black",
                  border: "3px solid #fd5d5d",
                  borderRadius: "11px",
                }}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
