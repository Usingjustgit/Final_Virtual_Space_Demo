import React from "react";

const Booking = () => {
  return (
    <div
      className="formbold-main-wrapper"
      style={{ width: "500px", margin: "auto auto" }}
    >
      {/* <!-- Author: FormBold Team -->
<!-- Learn More: https://formbold.com --> */}
      <div className="formbold-form-wrapper">
        <h2
          className="text-dark text-center font-weight-bold"
          style={{
            textShadow: "0 0 7px rgba(0, 0, 0, 0.5)",
            marginBottom: "27px",
          }}
        >
          Book Venue
        </h2>

        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="formbold-input-flex">
            <div>
              <input
                type="date"
                name="firstname"
                id="firstname"
                placeholder="Venue Name"
                className="formbold-form-input"
              />
              <label for="firstname" class="formbold-form-label">
                Booking Date
              </label>
            </div>
            <div>
              <input
                type="number"
                name="firstname"
                id="firstname"
                placeholder="Booking Days"
                className="formbold-form-input"
              />
              <label for="firstname" class="formbold-form-label">
                Booking Days
              </label>
            </div>
          </div>

          <div className="formbold-input-flex w-full" style={{ width: "200%" }}>
            <div>
              <input
                type="number"
                name="email"
                id="email"
                value={31000}
                placeholder="Venue Rant Per Day"
                className="formbold-form-input"
                disabled
              />
              <label for="email" class="formbold-form-label">
                Total Venue Rant
              </label>
            </div>
          </div>

          <div className="formbold-textarea">
            <textarea
              rows="1"
              name="message"
              id="message"
              placeholder="Write about venue ..."
              className="formbold-form-input"
            ></textarea>
            <label for="message" className="formbold-form-label">
              description
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="formbold-btn">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
