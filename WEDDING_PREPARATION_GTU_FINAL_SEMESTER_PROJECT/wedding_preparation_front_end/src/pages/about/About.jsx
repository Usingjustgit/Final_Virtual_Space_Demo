import React from "react";
// import img from "../../../";

const About = () => {
  return (
    <>
      <div className="container-fluid position-relative overflow-hidden bg-secondary py-5">
        <img
          src="../../../img/bg-flower.png"
          className="img-fluid position-absolute top-0"
          style={{
            right: "-15px",
            transform: "rotate(270deg)",
            opacity: "0.5",
          }}
          alt=""
        />
        <img
          src="../../../img/bg-flower.png"
          className="img-fluid position-absolute"
          style={{
            bottom: "10px",
            left: "-15px",
            transform: "rotate(90deg)",
            opacity: " 0.5",
          }}
          alt=""
        />
        <div className="container py-5 position-relative">
          <div className="row g-5 align-items-center">
            <div className="col-xl-6 wow fadeIn" data-wow-delay="0.1s">
              <div
                className="border-white bg-primary"
                style={{ borderStyle: "double" }}
              >
                <img
                  src="../../../img/about-1.jpg"
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="wow fadeIn" data-wow-delay="0.3s">
                <h5 className="text-uppercase text-primary fw-bold mb-4">
                  About Us
                </h5>
                <h1 className="display-5 text-white mb-4">
                  We Make Your Every Moment
                </h1>
                <p className="text-white fs-5 mb-4">
                  We are crafting every detail, ensuring each moment resonates
                  with your love story. From intricate plans to heartfelt
                  gestures, your wedding journey is our priority.
                </p>
                <div className="tab-className bg-primary p-4">
                  <ul className="nav d-flex mb-4">
                    <li className="nav-item">
                      <a
                        className="d-flex py-2 text-center bg-white active"
                        data-bs-toggle="pill"
                        href="#tab-1"
                      >
                        <span className="text-dark" style={{ width: "150px" }}>
                          Bride Info
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="d-flex py-2 mx-3 text-center bg-white"
                        data-bs-toggle="pill"
                        href="#tab-2"
                      >
                        <span className="text-dark" style={{ width: "150px" }}>
                          Groom info
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                      <div className="row">
                        <div className="col-12">
                          <div className="d-flex">
                            <div className="me-4">
                              <img
                                src="../../../img/bride.jpg"
                                className="img-fluid w-100 img-border"
                                alt=""
                              />
                            </div>
                            <div className="text-start my-auto">
                              <h5 className="text-white fw-bold">Evelyn</h5>
                              <p className="text-white mb-3">
                                Step by step, we navigate the path to your
                                wedding day, ensuring every detail is balanced,
                                every decision made with care, creating a
                                harmonious celebration of love
                              </p>
                              <div className="d-flex">
                                <a
                                  href=""
                                  className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                >
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                  href=""
                                  className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                >
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                  href=""
                                  className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                >
                                  <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                  href=""
                                  className="btn btn-primary btn-primary-outline-0 btn-sm-square me-0"
                                >
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab-2" className="tab-pane fade show p-0">
                      <div className="row">
                        <div className="col-12">
                          <div className="d-flex">
                            <div className="me-4">
                              <img
                                src="../../../img/Groom.jpg"
                                className="img-fluid w-100 img-border"
                                alt=""
                              />
                            </div>
                            <div className="text-start my-auto">
                              <h5 className="text-white fw-bold">Anthony</h5>
                              <p className="text-white mb-3">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
                              <div className="d-flex">
                                <a
                                  href=""
                                  className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                >
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                  href=""
                                  className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                >
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                  href=""
                                  className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                >
                                  <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                  href=""
                                  className="btn btn-primary btn-primary-outline-0 btn-sm-square me-0"
                                >
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0">
                    <a
                      href="#"
                      className="btn btn-primary btn-primary-outline-0 py-3 px-4"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="d-inline-block ms-4 me-3">
                      <i className="fa fa-phone fa-2x text-success border border-2 border-white p-2"></i>
                    </div>
                    <div className="d-flex flex-column flex-nowrap">
                      <h5 className="text-dark fw-bold mb-2">
                        Call Us Anytime
                      </h5>
                      <h4 className="text-primary mb-0">+123 456 7890</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
