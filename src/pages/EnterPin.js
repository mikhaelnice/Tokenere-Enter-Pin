import SideBar from "../components/SideBar";

import "./desktop3.css";

const EnterPin = () => {
  return (
    <div className="NftComingSoon-section">
      <SideBar />
      <div className="pin-section">
        <div className="pin-header">
          <h1>Enter Pin</h1>
        </div>

        <div className="pin-wrapper">
          <div className="pin-input">
            <label htmlFor="">Transaction Pin</label>
            <div>
              <input type="password" />
              <img src="/show-eye.svg" alt="" />
            </div>
          </div>

          <div className="pin-input">
            <label htmlFor="">Confirm Transaction Pin</label>
            <div>
              <input type="password" />
              <img src="/show-eye.svg" alt="" />
            </div>
          </div>

          <button className="pin-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default EnterPin;
