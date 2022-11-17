import React from "react";
import Twitter from "../../assets/images/twitter.svg";
import Facebook from "../../assets/images/facebook.svg";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fotterUno">
        <div>About Us</div>
        <div className="contact">Contact</div>
      </div>
      <div className="footerDos">
        <div className="footerLogo">
          <div>
            <img src={Twitter} alt="" />
          </div>
          <div className="logoDos">Twitter</div>
        </div>
        <div className="footerLogo">
          <div>
            <img className="logoUno" src={Facebook} alt="" />
          </div>
          <div className="logoDos">Facebook</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
