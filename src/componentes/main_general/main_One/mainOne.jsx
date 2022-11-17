import React from "react";
import NavBar from "../../navbar/Nav";
import Footer from "../../footer/Footer";
import imgGirl from "../../../assets/images/landing-page-girl.png";
import Micro from "../../../assets/images/microphone.svg";
import Album from "../../../assets/images/albums.svg";
import More from "../../../assets/images/more.svg";
import Cover from "../../../assets/images/covers.jpg";
import "../main_One/mainOne.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const mainOne = () => {
  return (
    <div>
        <NavBar />
      
      <div className="circuloGen">
      <div className="circuloUno"></div>
      <div className="circuloDos"></div>
      </div>
      <div className="tresCirculo">
        <div className="circuloTres"></div>
      </div>
      <div className="mainGen">
        <div className="blockOne">
          <div className="imgGirl">
            <img className="imgGirl" src={imgGirl} alt="" />
          </div>
          <div className="paragrafOne">
            <h1>Feel The Music</h1>
            <p className="paragraft">Stream over 20 thousand song with one click</p>
            <button class="button accept-button" id="accept-button">
              <Link className="link" to="/join">Join Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="meinDos">
        <div>
            <div className="discover">Discover new music</div>
            <div className="iconTres">
                <div className="iconName"><img className="iconsJunior" src={Micro} alt="" />Charts</div>
                <div className="iconName"><img className="iconsJunior" src={Album} alt="" />Albums</div>
                <div className="iconName"><img className="iconsJunior" src={More} alt="" />More</div>
            </div>
            <div className="byJoing">By joing you can benefit by listening to the latest albums released.</div>
        </div>
        <div> <img className="coverImg" src={Cover} alt="" /></div>
      </div>
      <Footer/>
    </div>

  );
};

export default mainOne;
