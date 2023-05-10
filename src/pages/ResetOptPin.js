import React from "react";
import "./desktop3.css";
import SideBar from "../components/SideBar";

const ResetOptPin = () => {
  return (
    <div className="NftComingSoon-section">
      <SideBar />
      <div className="pin-section">
        <div className="pin-header">
          <h1>Reset pin</h1>
        </div>

        <div className="pin-content">
          <h2>Enter your new PIN</h2>
          <h1>balablu@gmail.com</h1>
        </div>

        <div className="pin-wrapper">
          <div className="otp-fields">
            <input type="text" maxLength={"1"} minLength={"1"} />
            <input type="text" maxLength={"1"} minLength={"1"} />
            <input type="text" maxLength={"1"} minLength={"1"} />
            <input type="text" maxLength={"1"} minLength={"1"} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              style={{ marginTop: "50px", width: "652px" }}
              className="pin-button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetOptPin;
