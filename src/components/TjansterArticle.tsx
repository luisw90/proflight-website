import React from "react";

export const TjansterArticle = () => {
  return (
    <div className="tjanster__article-container">
      <div className="utbildningar__article">
        <img className="tjanster__article-image" src="heli5.png" alt="" />

        <div>TITLE</div>
        <div className="utbildningar__article-subtitle">
          Det första steget i din pilotkarriär är ett PPL. Alla börjar med ett
          PPL, här lär du dig hur du planerar samt genomför en flygning på ett
          säkert sätt.
        </div>
        <button className="utbildningar__article-button">Läs mer</button>
      </div>
      <div className="utbildningar__article">
        <img className="tjanster__article-image" src="heli5.png" alt="" />

        <div>TITLE</div>
        <div className="utbildningar__article-subtitle">
          Att arbeta eller kunna ta betalt som helikopterpilot är en dröm för
          många, för att kunna göra detta krävs ett CPL.
        </div>
        <button className="utbildningar__article-button">Läs mer</button>
      </div>
      <div className="utbildningar__article">
        <img className="tjanster__article-image" src="heli5.png" alt="" />

        <div>TITLE</div>
        <div className="utbildningar__article-subtitle">
          För att få flyga i moln, dimma eller utan visuell kontakt med marken
          och med endast instrument som referens och navigationshjälpmedel,
          behövs en IR – Rating.
        </div>
        <button className="utbildningar__article-button">Läs mer</button>
      </div>
    </div>
  );
};
