import React from "react";
import "./simulator.css";

const Simulator = () => {
  return (
    <div className="simulator__container">
      <div>
        <div className="simulator__background"></div>
        <div className="simulator__infocontainer">
          <h1 className="simulator__main-title">Simulator</h1>
          <div className="simulator__main-subtitle">
            Proflight har en av de få fullskaliga helikoptersimulatorerna i
            norra Europa. Användningsområdet för simulatorn är stort och
            sträcker sig hela vägen från komplicerade instrumentflygutbildningar
            och MCC hela vägen ned till mörkerträning och rena
            navigationsövningar. Vill du veta mer?
          </div>

          <button className="simulator__button">
            {" "}
            Kontakta oss på Proflight{" "}
          </button>
          <h3 className="simulator__subtitle-container">
            <div className="simulator__subtitle-innercontainer">
              <div className="simulator__title">Två primära funktioner</div>
              <div className="simulator__subtitle">
                Simulatorn fyller två primära funktioner. Den viktigaste är
                möjligheten att träna och öva på situationer som är svåra att
                skapa i verkligheten utan att framkalla verklig fara. Den
                sekundära är att kostnaden för att flyga simulatorn är lägre
                vilket medför mer flygtid och att den blivande piloten därigenom
                får avsevärt mycket mer rutin och träning i svåra scenarion.
              </div>
            </div>
            <div className="simulator__subtitle-innercontainer">
              <div className="simulator__title">Bättre piloter</div>
              <div className="simulator__subtitle">
                På detta sätt hjälper simulatorn, med sina mycket välrenommerade
                instruktörer, till att skapa bättre piloter som är tryggare i
                sina arbetssituationer. Vi erbjuder även allmänheten möjligheten
                att prova på att flyga en helikopter i denna riskfria miljö. En
                uppskattad upplevelse. Läs mer om vårt simulator för
                alllmänheten under vårt presentpaket.
              </div>
            </div>
          </h3>
        </div>
        <img className="simulator__image" src="simulator2.jpg" alt=""></img>
      </div>
    </div>
  );
};

export default Simulator;
