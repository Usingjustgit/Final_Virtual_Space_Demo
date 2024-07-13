import React from "react";
import About from "../about/About";
import Gallery from "../gallary/Gallary";
import Storys from "../story/Story";
import Timeline from "../timeline/Timeline";
import Rsvp from "../rsvp/RSVP";

const Home = () => {
  return (
    <>
      <div className="container-fluid carousel-header px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src="../../../img/carousel-1.jpg"
                className="img-fluid"
                alt="Image"
              />
              <div className="carousel-caption">
                <div
                  className="p-3 mx-auto animated zoomIn"
                  style={{ maxWidth: "900px" }}
                >
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: "3px" }}
                    >
                      WE ARE GETTING MARRIED
                    </h4>
                  </div>
                  <h1 className="display-1 text-capitalize text-white mb-3">
                    Evelyn <i className="fa fa-heart text-primary"></i> Anthony
                  </h1>
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: "3px" }}
                    >
                      June 28 2024
                    </h4>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn btn-primary btn-primary-outline-0 py-3 px-5"
                      href="#"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../../img/carousel-2.jpg"
                className="img-fluid"
                alt="Image"
              />
              <div className="carousel-caption">
                <div
                  className="p-3 mx-auto animated zoomIn"
                  style={{ maxWidth: "900px" }}
                >
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: "3px" }}
                    >
                      WE ARE GETTING MARRIED
                    </h4>
                  </div>
                  <h1 className="display-1 text-capitalize text-white mb-3">
                    Evelyn <i className="fa fa-heart text-primary"></i> Anthony
                  </h1>
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: "3px" }}
                    >
                      June 28 2024
                    </h4>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn btn-primary btn-primary-outline-0 py-3 px-5"
                      href="#"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../../img/carousel-3.png"
                className="img-fluid bg-secondary"
                alt="Image"
              />
              <div className="carousel-caption">
                <div
                  className="p-3 mx-auto animated zoomIn"
                  style={{ maxWidth: "900px" }}
                >
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: "3px" }}
                    >
                      WE ARE GETTING MARRIED
                    </h4>
                  </div>
                  <h1 className="display-1 text-capitalize text-white mb-3">
                    Evelyn <i className="fa fa-heart text-primary"></i> Anthony
                  </h1>
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: "3px" }}
                    >
                      June 28 2024
                    </h4>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn btn-primary btn-primary-outline-0 py-3 px-5"
                      href="#"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- Hello! Start --> */}
      <div className="container-fluid position-relative py-5" id="weddingAbout">
        <div className="position-absolute" style={{ top: "-35px", right: "0" }}>
          <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div
          className="position-absolute"
          style={{ top: "-10px", left: "0", transform: "rotate(150deg)" }}
        >
          <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div className="container position-relative py-5">
          <div
            className="mx-auto text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="text-primary display-1">Hello!</h1>
            <h4 className="text-dark mb-0">
              We invite you to celebrate our wedding
            </h4>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row g-4 align-items-center">
                <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div className="text-end my-auto pe-4">
                      <h3 className="text-primary mb-3">Evelyn</h3>
                      <p
                        className="text-dark mb-0"
                        style={{ lineHeight: "30px" }}
                      >
                        Join us in celebrating love's union as we joyfully
                        extend our heartfelt invitation from the girls' side.
                        Let's rejoice together!
                      </p>
                    </div>
                    <img
                      src="../../../img/bride.jpg"
                      className="img-fluid img-border"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-2 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="fa fa-heart fa-5x text-primary"></i>
                  </div>
                </div>
                <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <img
                      src="../../../img/Groom.jpg"
                      className="img-fluid img-border"
                      alt=""
                    />
                    <div className="my-auto ps-4">
                      <h3 className="text-primary mb-3">Anthony</h3>
                      <p
                        className="text-dark mb-0"
                        style={{ lineHeight: "30px" }}
                      >
                        With great joy, welcome Anthony from the side to share
                        in the celebration of love and union. Let's create
                        unforgettable memories together!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Gallery />
      <Storys />
      <Timeline />
      <Rsvp />
    </>
  );
};

export default Home;
