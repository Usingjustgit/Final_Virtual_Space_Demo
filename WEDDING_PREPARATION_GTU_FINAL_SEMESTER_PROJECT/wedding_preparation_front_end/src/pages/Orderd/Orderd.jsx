import React from "react";

const Orderd = () => {
  return (
    <div
      className="formbold-main-wrapper"
      style={{ width: "500px", margin: "auto auto" }}
    >
      {/* <!-- Author: FormBold Team -->
<!-- Learn More: https://formbold.com --> */}
      <div className="formbold-form-wrapper">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="formbold-input-flex">
            <div>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Venue Name"
                className="formbold-form-input"
              />
              <label for="firstname" class="formbold-form-label">
                Enter your email
              </label>
            </div>
          </div>

          <div className="formbold-input-flex">
            <div>
              <input
                type="number"
                name="email"
                id="email"
                placeholder="Venue Rant Per Day"
                className="formbold-form-input"
              />
              <label for="email" class="formbold-form-label">
                Enter your phone
              </label>
            </div>
          </div>

          <div className="formbold-textarea">
            <textarea
              rows="1"
              name="phone"
              id="phone"
              placeholder="Enter Venue Address ..."
              className="formbold-form-input"
            ></textarea>
            <label for="phone" className="formbold-form-label">
              Shipping Address
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="formbold-btn">Order Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Orderd;
