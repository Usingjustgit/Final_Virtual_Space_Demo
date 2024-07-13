import React from "react";

const ContectUs = () => {
  return (
    <div
      className="container-fluid RSVP-form py-5"
      id="weddingRsvp"
      style={{
        background: "url('../../../img/story-4.jpg') no-repeat center/cover",
      }}
    >
      <div
        className="container py-0"
        style={{
          minHeight: "100vh",
        }}
      >
        <div
          className="mb-0 text-center mx-auto wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h6
            className="display-2 text-white"
            style={{
              fontSize: "51px",
              margin: "0px",
              padding: "0px",
            }}
          >
            Contect us
          </h6>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div
              className="px-5 py-3 position-relative"
              style={{ border: "none" }}
            >
              <form>
                <div className="row gx-4 gy-3">
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="form-group">
                      {/* <label className="form-label text-dark">Full Name</label> */}
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
                      {/* <label className="form-label text-dark">
                        Enter Your Email
                      </label> */}
                      <input
                        type="text"
                        className="form-control py-3 border-0"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div className="form-group">
                      {/* <label className="form-label text-dark">Message</label> */}
                      <textarea
                        name="text"
                        className="form-control border-0"
                        id="exampletextarea"
                        cols="30"
                        rows="5"
                        placeholder="Enter Your Message here"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    className="col-12 text-center wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <button className="btn btn-primary btn-primary-outline-0 py-3 px-5">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContectUs;
