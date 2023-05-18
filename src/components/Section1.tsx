import React from "react";

export const Section1 = () => {
  return (
    <div className="home__section1-container">
      <img className="home__section1-image" src="heli2.png" alt=""></img>
      <div className="home__section1-infocontainer">
        <h1 className="home__section1-title">Vill du bli Helikopterpilot?</h1>
        <h3 className="home__section1-subtitle">
          Grattis, då har du hittat rätt! Proflight Nordic är ledande i
          utvecklingen av pilotprogram i norden. Vi förverkligar din dröm om att
          bli helikopterpilot.
        </h3>
        <button className="home__section1-button">Läs mer</button>
      </div>
    </div>
  );
};
