import React from "react";

const AddGuest = () => {
  return (
    <div
      class="formbold-main-wrapper"
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
          Add Guest
        </h2>

        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="formbold-input-flex">
            <div>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter Guest Name"
                className="formbold-form-input"
              />
              <label for="firstname" className="formbold-form-label">
                Guest Name
              </label>
            </div>
          </div>
          <div class="formbold-input-flex">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Guest Email"
                className="formbold-form-input"
              />
              <label for="email" className="formbold-form-label">
                Guest Email
              </label>
            </div>
          </div>
          <div class="formbold-input-flex">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Guest Address..."
                className="formbold-form-input"
              />
              <label for="email" className="formbold-form-label">
                Guest Address
              </label>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="formbold-btn">Add Guest</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGuest;
