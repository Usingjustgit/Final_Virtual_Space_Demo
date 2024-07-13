import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer Start  */}
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-4 text-start">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Links</h4>
                <NavLink to="/about" className="btn-link">
                  About
                </NavLink>
                <NavLink to="/gallery" className="btn-link">
                  Blogs
                </NavLink>
                <NavLink to="/story" className="btn-link">
                  Story
                </NavLink>
                <NavLink to="/timeline" className="btn-link">
                  Timeline
                </NavLink>
                {/* <NavLink to="/rsvp" className="btn-link">
                  RSVP
                </NavLink> */}
                <NavLink to="/contactus" className="btn-link">
                  Contact Us
                </NavLink>
                <NavLink to="/wsedding" className="btn-link">
                  Wsedding-date
                </NavLink>
                {/* <Navbar /> */}
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="footer-item">
                <h4 className="mb-4 text-white">
                  Wedding<strong className="text-primary">&</strong>Preparation
                </h4>
                <p className="text-white">
                  Dedicated to crafting your dream wedding, we meticulously plan
                  every detail, ensuring your special day reflects your love
                  story beautifully. Let's create memories together.
                </p>
                <div className="btn-link d-flex justify-content-center">
                  <a
                    href="#"
                    className="btn btn-md-square btn-light btn-light-outline-0 me-2"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-md-square btn-light btn-light-outline-0 me-2"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-md-square btn-light btn-light-outline-0 me-2"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-md-square btn-light btn-light-outline-0 me-0"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-end">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Follow Us</h4>
                <a href="#" className="btn-link">
                  Faceboock
                </a>
                <a href="#" className="btn-link">
                  Instagram
                </a>
                <a href="#" className="btn-link">
                  Twitter
                </a>
                <h4 className="my-4 text-white">Contact Us</h4>
                <a href="#" className="btn-link">
                  <i className="fas fa-envelope text-secondary me-2"></i>
                  wedding.preparation@gmail.com
                </a>
                <a href="#" className="btn-link">
                  <i className="fas fa-phone text-secondary me-2"></i> (+012)
                  3456 7890 123
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      <a
        href="#"
        className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;
