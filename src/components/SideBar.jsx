import React from "react";

const SideBar = () => {
  return (
    <div className="NftComingSoon-sidebar">
      <div>
        <a href="#" className="vector-group">
          <img className="vector-icon1" alt="" src="/vector1.svg" />
          <div className="my-text">My Account</div>
        </a>

        <a href="#" className="vector-group">
          <img className="vector-icon1" alt="" src="/dashboard.svg" />
          <div className="my-text">Dashboard</div>
        </a>

        <a href="#" className="vector-group">
          <img className="vector-icon1" alt="" src="/swap.svg" />
          <div className="my-text">Swap</div>
        </a>

        <a href="#" className="vector-group">
          <img className="vector-icon1" alt="" src="/Payment.svg" />
          <div className="my-text">NFT</div>
        </a>

        <a href="#" className="vector-group">
          <img className="vector-icon1" alt="" src="/deposit.svg" />
          <div className="my-text">Deposit</div>
        </a>

        <a href="#" className="vector-group">
          <img className="vector-icon1" alt="" src="/transition.svg" />
          <div className="my-text">Transaction</div>
        </a>

        <a href="#" className="vector-group">
          <img className="vector-icon1" alt="" src="/settings.svg" />
          <div className="my-text">Settings</div>
        </a>

        <a href="#" className="vector-group">
          <img className="vector-icon1" alt="" src="/help.svg" />
          <div className="my-text">Help Center</div>
        </a>

        <a href="#" className="vector-group" style={{ marginTop: "70px" }}>
          <img className="vector-icon1" alt="" src="/logout.svg" />
          <div className="my-text">Log Out</div>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
