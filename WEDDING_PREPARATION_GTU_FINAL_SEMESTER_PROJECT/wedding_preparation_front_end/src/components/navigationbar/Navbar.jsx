import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((data) => data.isLogin);

  console.log(data);
  return (
    <>
      {/* <!-- Navbar start --> */}
      <div className="container-fluid sticky-top px-0 shadow">
        <div className="container-fluid">
          <div className="container px-0">
            <nav className="navbar navbar-light navbar-expand-xl" id="navBar">
              <NavLink to="/" className="navbar-brand">
                {/* <h4 className="text-primary display-6 fw-bold mb-0"> */}
                {/* Mr<strong className="text-secondary">&</strong>Mrs */}
                {/* <img style={{ width: "200px" }} src={mainLogo} alt="logo" />
                </h4> */}
                <button
                  href="#weddingRsvp"
                  className="btn btn-primary btn-primary-outline-0 py-2 px-4 ms-4"
                >
                  Wedding Preparation
                </button>
              </NavLink>
              <button
                className="navbar-toggler py-2 px-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars text-primary"></span>
              </button>
              <div
                className="collapse navbar-collapse py-3"
                id="navbarCollapse"
              >
                <div className="navbar-nav mx-auto border-top">
                  <NavLink to="/" className="nav-item nav-link active">
                    Home
                  </NavLink>
                  <NavLink to="/about" className="nav-item nav-link">
                    About
                  </NavLink>
                  <NavLink to="/contect-us" className="nav-item nav-link">
                    Contect us
                  </NavLink>
                  {/* <NavLink to="/story" className="nav-item nav-link">
                    Story
                  </NavLink>
                  <NavLink to="/timeline" className="nav-item nav-link">
                    Timeline
                  </NavLink>
                  <NavLink to="/gallery" className="nav-item nav-link">
                    Blogs
                  </NavLink> */}
                </div>
                <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                  {/* {data.payload ? ( */}
                  <NavLink to="/logout">
                    <button
                      href="#weddingRsvp"
                      className="btn btn-primary btn-primary-outline-0 py-2 px-4 ms-4"
                    >
                      Logout
                    </button>
                  </NavLink>
                  {/* ) : (
                    <NavLink to="/login">
                      <button
                        href="#weddingRsvp"
                        className="btn btn-primary btn-primary-outline-0 py-2 px-4 ms-4"
                      >
                        Login
                      </button>
                    </NavLink>
                  )} */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Navbar;
