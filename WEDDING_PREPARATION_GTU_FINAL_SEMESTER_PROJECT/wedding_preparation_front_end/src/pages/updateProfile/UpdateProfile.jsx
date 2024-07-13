import React from "react";

const UpdateProfile = () => {
  return (
    <>
      {/* <div
        className="container-fluid RSVP-form py-3"
        id="weddingRsvp"
        style={{
          background:
            "url('../../../img/wedding-date-bg.jpg'), no-repeat center/cover",
        }}
      >
        <div
          className="container my-3 py-5 px-0"
          style={{
            width: "451px",
            boxShadow: "0 0 11px rgba(0, 0, 0, 0.25)",
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <div
            className="mb-5 text-center mx-auto wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-2 text-primary" style={{ fontSize: "51px" }}>
              Update profile
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="p-1 border-secondary position-relative">
                <form>
                  <div className="row gy-3 pb-5">
                    <div
                      className="col-lg-6 wow fadeIn "
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      data-wow-delay="0.1s"
                    >
                      <div className="form-group" style={{ width: "77%" }}>
                        {/* <label className="form-label text-dark">
                       Email Adderss
                     </label> 
                        <input
                          type="text"
                          name="name"
                          className="form-control py-3 border-0"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 wow fadeIn "
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      data-wow-delay="0.1s"
                    >
                      <div className="form-group" style={{ width: "77%" }}>*/}
      {/* <label className="form-label text-dark">
                       Email Adderss
                     </label> 
                        <input
                          type="text"
                          name="email"
                          className="form-control py-3 border-0"
                          placeholder="Enter Your Email Address"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 wow fadeIn"
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      data-wow-delay="0.1s"
                    >
                      <div className="form-group" style={{ width: "77%" }}> */}
      {/* <label className="form-label text-dark">Password</label>
                        <input
                          type="number"
                          name="phone"
                          className="form-control py-3 border-0"
                          placeholder="Enter Your phone"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 wow fadeIn"
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      data-wow-delay="0.1s"
                    >
                      <div className="form-group" style={{ width: "77%" }}>*/}
      {/* <label className="form-label text-dark">Password</label> 
                        <input
                          type="date"
                          name="birthdate"
                          className="form-control py-3 border-0"
                          placeholder="Enter Your Birth_date"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <div className="form-check d-flex p-0">
                        <input
                          className="form-check-input mr-3"
                          type="radio"
                          name="flexRadioDefault"
                        />
                        <label className="form-check-label text-dark ml-3 pl-3">
                          Are you sure you want to update!
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div
                      className="col-12 text-center wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <button
                        type="submit"
                        className="btn btn-primary btn-primary-outline-0 py-2 px-5"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div > * /}*/}
      <div className="container-fluid RSVP-form py-5" id="weddingRsvp">
        <div className="container py-5">
          <div
            className="mb-5 text-center mx-auto wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-2 text-primary">Update Profile</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div
                className="p-5 border-secondary position-relative"
                style={{ borderStyle: "double" }}
              >
                <div
                  className="fw-bold text-primary bg-white d-flex align-items-center justify-content-center position-absolute border-secondary p-2 wow fadeIn"
                  data-wow-delay="0.1s"
                  style={{
                    width: "75%",
                    borderStyle: "double",
                    top: "0",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Are You Sure You Want To Update?
                </div>
                <form>
                  <div className="row gx-4 gy-3">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="form-group">
                        <label className="form-label text-dark">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control py-3 border-0"
                          id="name"
                          name="fullName"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="form-group">
                        <label className="form-label text-dark">
                          Enter Your Email
                        </label>
                        <input
                          type="text"
                          className="form-control py-3 border-0"
                          id="email"
                          name="email"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="form-group">
                        <label className="form-label text-dark">
                          Enter Your Birth Date
                        </label>
                        <input
                          type="date"
                          className="form-control py-3 border-0"
                          id="birth_date"
                          name="birth_date"
                          placeholder="Enter Your Birth Date"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="form-group">
                        <label className="form-label text-dark">
                          Enter Your Phone
                        </label>
                        <input
                          type="number"
                          className="form-control py-3 border-0"
                          id="phone"
                          name="phone"
                          placeholder="Enter Your Phone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="form-group">
                        <label className="form-label text-dark">
                          Please Chose Your Profile Image
                        </label>
                        <input
                          type="file"
                          className="form-control py-3 border-0"
                          id="file"
                          name="file"
                          placeholder="select image"
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 text-center wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <button className="btn btn-primary btn-primary-outline-0 py-3 px-5">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
