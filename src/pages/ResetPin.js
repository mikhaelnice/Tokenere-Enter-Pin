import SideBar from "../components/SideBar";

import "./desktop3.css";

const ResetPin = () => {
  return (
    <div className="NftComingSoon-section">
      <SideBar />
      <div className="pin-section">
        <div className="pin-header">
          <h1>Reset pin</h1>
        </div>

        <div className="pin-wrapper">
          <div className="pin-input">
            <label htmlFor="">Enter your password</label>
            <div>
              <input type="password" />
              {/* <img src="/show-eye.svg" alt="" /> */}
            </div>
          </div>

          <button
            style={{ marginTop: "150px", width: "652px" }}
            className="pin-button"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPin;
