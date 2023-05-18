import React from "react";
import { Header } from "../../components/Header";
import "./utbildningar.css";
import { UtbildningarArticle } from "../../components/UtbildningarArticle";

const Utbildningar = () => {
  return (
    <div>
      <div className="home__section1-container">
        <img className="home__section1-image" src="heli2.png" alt=""></img>
        <div className="home__section1-infocontainer">
          <h1 className="home__section1-title">
            Utbilda dig till helikopterpilot
          </h1>
          <h3 className="home__section1-subtitle">
            Proflight är ett helikopterföretag med fokus på högkvalitativ
            utbildning och vidareutbildning av helikopterpiloter på alla nivåer.
            Vi utbildar endast helikopterpiloter och genom det fokus som då
            erhålls kan vi erbjuda en förstklassig kvalité i vår utbildning som
            idag saknar motstycke i de flesta flygmomenten och teoretiska delar.
          </h3>
        </div>
        <UtbildningarArticle />
      </div>
    </div>
  );
};

export default Utbildningar;
