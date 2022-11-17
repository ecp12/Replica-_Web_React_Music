import React from "react";
import NavBar from "../../../componentes/navbar/Nav";
import Footer from "../../footer/Footer";

import "../main_two/mainTwo.css";

const maintwo = () => {
  return (
    <div className="twoMain">
      <div>
        <NavBar />
      </div>
      <div className="circuloGene">
      <div className="circuloUnos"></div>
      <div className="circuloDo"></div>
      </div>
      <div className="maintwoGen">
        <div className="genJouin">
          <div className="joinThe">
            <p class="parraf">Join the <span className="fun">fun.</span></p>
            </div>
          <div className="imputGen">
           <div className="nameImputs">Name:</div><input className="imputs" type="text" />
           <div className="nameImputs">Email:</div><input className="imputs" type="text" />
           <div className="nameImputs">Password:</div><input className="imputs" type="text" />
           <button class="button accep-button" id="accep-button">
              Join Now
            </button>
          </div>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default maintwo;
