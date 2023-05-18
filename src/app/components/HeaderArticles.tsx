import React from "react";

export const HeaderArticles = () => {
  return (
    <>
      <div>
        <div className="home__section3-cardcontainer">
          <div className="home__section3-card">
            <div className="home-setion3-left">
              <img
                className="home__section3-image"
                src="heli2.png"
                alt=""
              ></img>
            </div>
            <div className="home-setion3-right">
              <div className="home__section3-infocontainer">
                <h1 className="home__section3-title">UTBILDNINGAR</h1>
                <h3 className="home__section3-subtitle">
                  Att arbeta som pilot är en dröm för många. Har du ambitionen
                  och viljan är du välkommen till oss. Lär dig flyga
                  professionellt eller för nöjes skull. Vill du skaffa din egen
                  helikopter? Vi ger dig möjligheterna och verktygen.
                </h3>
                <button className="home__section3-button">
                  Gå till Utbildningarna
                </button>
              </div>
            </div>
            <div className="home__section3-cardbackground"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="home__section3-cardcontainer">
          <div className="home__section3-card">
            <div className="home-setion3-right">
              <div className="home__section3-infocontainer">
                <h1 className="home__section3-title">SIMULATOR</h1>
                <h3 className="home__section3-subtitle">
                  Att arbeta som pilot är en dröm för många. Har du ambitionen
                  och viljan är du välkommen till oss. Lär dig flyga
                  professionellt eller för nöjes skull. Vill du skaffa din egen
                  helikopter? Vi ger dig möjligheterna och verktygen.
                </h3>
                <button className="home__section3-button">
                  Mer om simulatorn
                </button>
              </div>
            </div>
            <div className="home-setion3-left">
              <img
                className="home__section3-image"
                src="heli3.png"
                alt=""
              ></img>
            </div>
            <div className="home__section3-cardbackground"></div>
          </div>
        </div>
      </div>
    </>
  );
};
