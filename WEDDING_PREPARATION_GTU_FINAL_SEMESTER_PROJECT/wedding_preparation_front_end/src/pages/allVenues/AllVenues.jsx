import React from "react";
import { venuesImage } from "../../../TemporyData/Venues";

const AllVenues = () => {
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
            All Venues
          </h1>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Venue Image</th>
                  <th>Venue Name</th>
                  <th>Venue Location</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {venuesImage.map((venue, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={venue.image}
                        alt="User"
                        className="user-image"
                      />
                    </td>
                    <td>{venue.name}</td>
                    <td>{venue.location}</td>
                    <td>
                      <button className="edit-btn">
                        <i className="fa fa-eye"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() =>
                          alert(`Are you sure? ${venue.name} will be deleted`)
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
                Add Venue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVenues;
