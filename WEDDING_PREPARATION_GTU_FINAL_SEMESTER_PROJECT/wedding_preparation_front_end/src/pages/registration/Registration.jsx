import { useFormik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerSchema } from "../../schemas";

const Registration = () => {
  const navigator = useNavigate();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        birth_date: "",
        phone: "",
      },
      validationSchema: registerSchema,
      onSubmit: async (values, { resetForm }) => {
        const res = await fetch("http://localhost:5000/auth/registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        console.log(res);
        if (res.status === 201) {
          console.log(res.status);
          navigator("/login");
          resetForm();
        }
      },
    });
  return (
    <>
      <div className="container-fluid RSVP-form py-5" id="weddingRsvp">
        <div className="container py-5">
          <div
            className="mb-5 text-center mx-auto wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-2 text-primary">Registration Form</h1>
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
                  I exited with your thoughts and wishes.so, I join take
                  banifits of the wedding preparation.
                </div>
                <form onSubmit={handleSubmit}>
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
                          value={values.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter Your Name"
                        />
                        {errors.fullName && touched.fullName ? (
                          <p className="text-danger">{errors.fullName}</p>
                        ) : null}
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
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Enter Your Email"
                        />
                        {errors.email && touched.email ? (
                          <p className="text-danger">{errors.email}</p>
                        ) : null}
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
                          value={values.birth_date}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Enter Your Birth Date"
                        />
                        {errors.birth_date && touched.birth_date ? (
                          <p className="text-danger">{errors.birth_date}</p>
                        ) : null}
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
                          value={values.phone}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Enter Your Phone"
                        />
                        {errors.phone && touched.phone ? (
                          <p className="text-danger">{errors.phone}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="form-group">
                        <label className="form-label text-dark">
                          Enter Your Password
                        </label>
                        <input
                          type="password"
                          className="form-control py-3 border-0"
                          id="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter Your Password"
                        />
                        {errors.password && touched.password ? (
                          <p className="text-danger">{errors.password}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="form-group">
                        <label className="form-label text-dark">
                          Enter Your Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control py-3 border-0"
                          id="confirmPassword"
                          name="confirmPassword"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Enter Your Confirm Password"
                        />
                        {errors.confirmPassword && touched.confirmPassword ? (
                          <p className="text-danger">
                            {errors.confirmPassword}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div
                      className="col-12 text-center wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <button className="btn btn-primary btn-primary-outline-0 py-3 px-5">
                        Register Now
                      </button>
                    </div>
                    <div
                      className="col-12 text-center wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <label className="form-label text-dark">
                        <NavLink to="/login">You alrady register ?</NavLink>
                      </label>
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

export default Registration;
