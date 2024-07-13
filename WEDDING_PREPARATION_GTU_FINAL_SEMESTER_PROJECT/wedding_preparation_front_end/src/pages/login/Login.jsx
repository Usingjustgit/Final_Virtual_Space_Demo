import { useFormik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginSchema } from "../../schemas";
import { useDispatch } from "react-redux";
import { verifyUser } from "../../redux/slice";

const Login = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: async (values, { resetForm }) => {
        console.log(values);
        const res = await fetch("http://localhost:5000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (res.status === 200) {
          console.log(dispatch(verifyUser));
          dispatch(verifyUser({ type: "USER", payload: true }));
          navigate("/");
        } else {
          alert("Login Failed");
        }
        resetForm();
      },
    });

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
              Login Form
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="p-1 border-secondary position-relative">
                <form onSubmit={handleSubmit}>
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
                        </label> */}
                        <input
                          type="text"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control py-3 border-0"
                          placeholder="Enter Your Email Address"
                        />
                        {errors.email && touched.email ? (
                          <p className="text-danger fs-6">{errors.email}</p>
                        ) : null}
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
                        {/* <label className="form-label text-dark">Password</label> */}
                        <input
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control py-3 border-0"
                          placeholder="Enter Your Password"
                        />
                        {errors.password && touched.password ? (
                          <p className="text-danger">{errors.password}</p>
                        ) : null}
                      </div>
                    </div>
                    <NavLink
                      to="/forgot-password"
                      className="d-block text-center"
                    >
                      Forgot Password?
                    </NavLink>

                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <div className="form-check d-flex p-0">
                        <input
                          className="form-check-input mr-3"
                          type="radio"
                          name="flexRadioDefault"
                        />
                        <label className="form-check-label text-dark ml-3 pl-3">
                          Accepts With Pleasure!
                        </label>
                      </div>
                      <div className="form-check-label text-dark">
                        <NavLink to="/sign-up" className="d-block m-0 p-0">
                          Create Account?
                        </NavLink>
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
                        Login
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

export default Login;
