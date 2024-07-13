import React from "react";
import { dummyBlogs } from "../../../TemporyData/blogs";

const AllBlogs = () => {
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
            All Blogs
          </h1>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Blog Image</th>
                  <th>Blog Title</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {dummyBlogs.map((blog, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={blog.image} alt="User" className="user-image" />
                    </td>
                    <td>{blog.title}</td>
                    <td>
                      <button className="edit-btn">
                        <i className="fa fa-eye"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() =>
                          alert(`Are you sure? ${blog.title} will be deleted`)
                        }
                      >
                        <i className="fa fa-trash"></i>
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
                Add Blogs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
