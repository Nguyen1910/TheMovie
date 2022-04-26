import React from "react";
import "./footer.css";
import * as FI from "react-icons/fi";

const index = () => {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <div className="footer-row">
          <a href="#">Liên hệ</a>
        </div>
        <div className="footer-row">
          <a href="#">Giới thiệu</a>
        </div>
        <div className="footer-row">
          <a href="#">Bản quyền</a>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-row">
          <i className="icon-socical">
            <FI.FiFacebook />
          </i>
          <a href="https://www.facebook.com/profile.php?id=100032472150450">
            Facebook
          </a>
        </div>
        <div className="footer-row">
          <i className="icon-socical">
            <FI.FiTwitter />
          </i>
          <a href="#">Twitter</a>
        </div>
        <div className="footer-row">
          <i className="icon-socical">
            <FI.FiInstagram />
          </i>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default index;
