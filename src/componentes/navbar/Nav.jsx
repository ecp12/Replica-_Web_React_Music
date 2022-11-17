import React from "react";
import logo from "../../assets/images/logo.png";
import "../navbar/Nav.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="navGen">
        
        <div className="logoNav" >
          <img src={logo} alt="" />
         <Link to="/" className="titul">SoundWave</Link>
        </div>
        <div className="option">
          <div className="join">Discover</div>
          <Link to="/join" className="join">join</Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
