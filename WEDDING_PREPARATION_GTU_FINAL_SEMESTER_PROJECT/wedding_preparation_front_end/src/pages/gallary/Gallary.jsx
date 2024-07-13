import React from "react";

const Gallery = () => {
  return (
    <>
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
            <h1 className="display-2 text-dark">Wedding Blogs</h1>
            <p className="fs-5 text-dark">
              A visual tapestry of cherished moments, love's radiance captured
              in every frame, forever etched in time
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="gallery-item">
                <div className="gallery-img">
                  <img
                    className="img-fluid w-100"
                    src="../../../img/gallery-1.jpg"
                    alt=""
                  />
                  <div className="hover-style"></div>
                  <div className="search-icon">
                    <a
                      href="img/gallery-1.jpg"
                      data-lightbox="Gallery-1"
                      className="my-auto"
                    >
                      <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                  style={{ borderStyle: "double" }}
                >
                  <h5>Wedding on the beach</h5>
                  <p className="text-dark mb-0">June 28, 2024</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="gallery-item">
                <div className="gallery-img">
                  <img
                    className="img-fluid w-100"
                    src="../../../img/gallery-2.jpg"
                    alt=""
                  />
                  <div className="hover-style"></div>
                  <div className="search-icon">
                    <a
                      href="img/gallery-2.jpg"
                      data-lightbox="Gallery-2"
                      className="my-auto"
                    >
                      <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                  style={{ borderStyle: "double" }}
                >
                  <h5>Wedding on the beach</h5>
                  <p className="text-dark mb-0">June 28, 2024</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="gallery-item">
                <div className="gallery-img">
                  <img
                    className="img-fluid w-100"
                    src="../../../img/gallery-3.jpg"
                    alt=""
                  />
                  <div className="hover-style"></div>
                  <div className="search-icon">
                    <a
                      href="img/gallery-3.jpg"
                      data-lightbox="Gallery-3"
                      className="my-auto"
                    >
                      <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                  style={{ borderStyle: "double" }}
                >
                  <h5>Wedding on the beach</h5>
                  <p className="text-dark mb-0">June 28, 2024</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="gallery-item">
                <div className="gallery-img">
                  <img
                    className="img-fluid w-100"
                    src="../../../img/gallery-4.jpg"
                    alt=""
                  />
                  <div className="hover-style"></div>
                  <div className="search-icon">
                    <a
                      href="img/gallery-4.jpg"
                      data-lightbox="Gallery-4"
                      className="my-auto"
                    >
                      <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                  style={{ borderStyle: "double" }}
                >
                  <h5>Wedding on the beach</h5>
                  <p className="text-dark mb-0">June 28, 2024</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="gallery-item">
                <div className="gallery-img">
                  <img
                    className="img-fluid w-100"
                    src="../../../img/gallery-5.jpg"
                    alt=""
                  />
                  <div className="hover-style"></div>
                  <div className="search-icon">
                    <a
                      href="img/gallery-5.jpg"
                      data-lightbox="Gallery-5"
                      className="my-auto"
                    >
                      <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                  style={{ borderStyle: "double" }}
                >
                  <h5>Wedding on the beach</h5>
                  <p className="text-dark mb-0">June 28, 2024</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="gallery-item">
                <div className="gallery-img">
                  <img
                    className="img-fluid w-100"
                    src="../../../img/gallery-6.jpg"
                    alt=""
                  />
                  <div className="hover-style"></div>
                  <div className="search-icon">
                    <a
                      href="img/gallery-6.jpg"
                      data-lightbox="Gallery-6"
                      className="my-auto"
                    >
                      <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                  style={{ borderStyle: "double" }}
                >
                  <h5>Wedding on the beach</h5>
                  <p className="text-dark mb-0">June 28, 2024</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="gallery-item">
                <div className="gallery-img">
                  <img
                    className="img-fluid w-100"
                    src="../../../img/gallery-7.jpg"
                    alt=""
                  />
                  <div className="hover-style"></div>
                  <div className="search-icon">
                    <a
                      href="img/gallery-7.jpg"
                      data-lightbox="Gallery-7"
                      className="my-auto"
                    >
                      <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                  style={{ borderStyle: "double" }}
                >
                  <h5>Wedding on the beach</h5>
                  <p className="text-dark mb-0">June 28, 2024</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="gallery-item">
                <div className="gallery-img">
                  <img
                    className="img-fluid w-100"
                    src="../../../img/gallery-8.jpg"
                    alt=""
                  />
                  <div className="hover-style"></div>
                  <div className="search-icon">
                    <a
                      href="img/gallery-8.jpg"
                      data-lightbox="Gallery-8"
                      className="my-auto"
                    >
                      <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                  style={{ borderStyle: "double" }}
                >
                  <h5>Wedding on the beach</h5>
                  <p className="text-dark mb-0">June 28, 2024</p>
                </div>
              </div>
            </div>
            <div
              className="col-12 text-center wow fadeIn"
              data-wow-delay="0.2s"
            >
              <a
                className="btn btn-primary btn-primary-outline-0 py-3 px-5 me-2"
                href="#"
              >
                View All <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
