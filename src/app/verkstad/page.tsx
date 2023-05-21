import React from "react";
import "../simulator/simulator.css";

const Verkstad = () => {
  return (
    <div className="simulator__container">
      <div>
        <div className="simulator__background"></div>
        <div className="simulator__infocontainer">
          <h1 className="simulator__main-title">Verkstad</h1>
          <div className="simulator__main-subtitle">
            Proflight tillhandahåller en komplett lösning för underhåll av
            helikoptrar. Vi har samtliga tillstånd av Transportstyrelsen för att
            se till att er helikopter förblir luftvärdig. Vi kan utföra alla
            tänkbara jobb, allt från en 100-timmars tillsyn till lackering, byte
            av inredning samt uppgradering av motor. Vi har många
            referensobjekt. Kort sagt, har du en helikopter, då har vi en
            lösning!
          </div>
          <h3 className="simulator__subtitle-container">
            <div className="simulator__subtitle-innercontainer">
              <div className="simulator__title">
                Continuing Airworthiness Management Organisation (CAMO)
              </div>
              <div className="simulator__subtitle">
                Organisation som ser till att fortlöpande kontrollera samtliga
                komponenters gångtider, bulletiner från tillverkarna samt
                Airworthiness Directives från myndigheterna. I normalfallet bär
                ägaren hela luftvärdighetsansvaret men genom ett sk. CAMO-avtal
                kan detta ansvar överlåtas.
              </div>
            </div>
            <div className="simulator__subtitle-innercontainer">
              <div className="simulator__title">Airworthiness Review</div>
              <div className="simulator__subtitle">
                Som ett bevis på vår långa, gedigna erfarenhet så har vi
                behörighet att granska luftvärdigheten på luftfartyg. Om vi
                finner helikoptern luftvärdig, får vi tack vare vår
                auktorisation, utfärda ARC (Airworthiness Review Certificate)
                som har erkänd legitimitet inom hela Europa.
              </div>
            </div>
            <div className="simulator__subtitle-innercontainer">
              <div className="simulator__title">Part-145</div>
              <div className="simulator__subtitle">
                Musklerna i allt underhåll, här sker den fysiska
                handpåläggningen. Verkstan utför sina underhållsåtgärder med
                certifierade tekniker, delar som kan spåras i varje led av
                tillverkningen samt med de senaste manualerna.
              </div>
            </div>
          </h3>
        </div>
        <img className="simulator__image" src="verkstad.jpeg" alt=""></img>
      </div>
    </div>
  );
};

export default Verkstad;
