import React from "react";

const ChangePassword = () => {
  return (
    <>
      <div
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
              Change Password
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="p-1 border-secondary position-relative">
                <form>
                  <div className="row gx-4 gy-3 pb-5">
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
                        <label className="form-label text-dark">
                          Old Password
                        </label>
                        <input
                          type="password"
                          className="form-control py-3 border-0"
                          placeholder="Enter Your Old Password"
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
                      <div className="form-group" style={{ width: "77%" }}>
                        <label className="form-label text-dark">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="form-control py-3 border-0"
                          placeholder="Enter Your New Password"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="form-check d-flex">
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          name="flexRadioDefault"
                        />
                        <label className="form-check-label text-dark">
                          Are You sure to change your password
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div
                      className="col-12 text-center wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <button className="btn btn-primary btn-primary-outline-0 py-2 px-5">
                        Change Password
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

export default ChangePassword;
