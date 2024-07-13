import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const res = fetch("http://localhost:5000/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    console.log(res.status);
    if (res.status === 200) {
      dispatch(logoutUser({ type: "USER", payload: false }));
      navigate("/login");
    } else {
      alert("Logout Failed");
    }
  };

  return (
    <>
      <div
        className="container-fluid RSVP-form py-3"
        id="weddingRsvp"
        style={{
          background:
            "url('../../../img/wedding-date-bg.jpg'), no-repeat center/cover",
          minHeight: "100vh",
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
            className="mb-2 text-center mx-auto wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1
              className="display-2 text-primary mb-0 pb-0"
              style={{ fontSize: "51px" }}
            >
              Logout
            </h1>
          </div>
          <div className="row justify-content-center mt-0 pt-0">
            <div className="col-md-10">
              <div className="p-1 border-secondary position-relative">
                <form onSubmit={handleSubmit}>
                  <h4 className="text-primary justify-content-center fw-bold text-center mt-3 mb-5">
                    Are you Sure you want to Logout
                  </h4>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div
                      className="col-12 text-center wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <button
                        type="submit"
                        className="btn btn-primary btn-primary-outline-0 py-2 px-5"
                      >
                        Logout
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

export default Logout;
