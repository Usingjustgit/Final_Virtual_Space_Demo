import React from "react";
import { dummyContactUsData } from "../../../TemporyData/massages";

const Contect = () => {
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
            Contect Us Messages
          </h1>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>User Name</th>
                  <th>User email</th>
                  <th>Message</th>
                  <th>Replay</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {dummyContactUsData.map((contect, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{contect.name}</td>
                    <td>{contect.email}</td>
                    <td>{contect.message}</td>
                    <td>
                      <button className="edit-btn">
                        <i className="fa fa-reply"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() =>
                          alert(`Are you sure? ${contect.name} will be deleted`)
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
                className="btn bg-danger"
                style={{
                  color: "white",
                  border: "none",
                  borderRadius: "11px",
                }}
              >
                Clear All Massage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
