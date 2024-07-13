import React, { useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { forgotPasswordSchema } from "../../schemas";
import { useFormik } from "formik";

const ForgotPassword = () => {
  const [count, setCount] = useState(0);
  const IncreaseCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const navigation = useNavigate();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        code: "",
      },
      validationSchema: forgotPasswordSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        const res = fetch("http://localhost:5000/auth/forgot-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        console.log(res);
        if (res.status === 200) {
          console.log(res.status);
          navigation("/login");
          resetForm();
        }
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
              Forgot Password
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="p-1 border-secondary position-relative">
                <form onSubmit={handleSubmit}>
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
                          Enter Your Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className="form-control py-3 border-0"
                          placeholder="Enter Your Email Adderss"
                        />
                        {errors.email && touched.email ? (
                          <p className="text-danger">{errors.email}</p>
                        ) : null}
                      </div>
                    </div>

                    {values.email && !errors.email ? (
                      <>
                        <NavLink
                          to="/forgot-password"
                          className="d-block  mt-2 text-end"
                          style={{ width: "87%" }}
                        >
                          Resend email
                        </NavLink>
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
                              Enter Code
                            </label>
                            <input
                              type="number"
                              name="code"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.code}
                              className="form-control py-3 border-0"
                              placeholder="Enter Your code"
                            />
                            {errors.code && touched.code ? (
                              <p className="text-danger">{errors.code}</p>
                            ) : null}
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div
                      className="col-12 text-center wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <button
                        className="btn btn-primary btn-primary-outline-0 py-2 px-5"
                        onClick={IncreaseCount}
                      >
                        {values.email && !errors.email && count > 5
                          ? "Verify Code"
                          : "Send Email"}
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

export default ForgotPassword;
