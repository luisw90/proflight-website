import React from "react";

import "./simulator.css";

const Simulator = () => {
  return (
    <div>
      <div className="simulator__section1-container">
        <img className="simulator__section1-image" src="heli5.png" alt=""></img>
      </div>
      <div className="simulator__section1-infocontainer">
        <h1>SIMULATOR</h1>
        <h3>
          Proflight har en av de få fullskaliga helikoptersimulatorerna i norra
          Europa. Användningsområdet för simulatorn är stort och sträcker sig
          hela vägen från komplicerade instrumentflygutbildningar och MCC hela
          vägen ned till mörkerträning och rena navigationsövningar. Simulatorn
          fyller två primära funktioner. Den viktigaste är möjligheten att träna
          och öva på situationer som är svåra att skapa i verkligheten utan att
          framkalla verklig fara. Den sekundära är att kostnaden för att flyga
          simulatorn är lägre vilket medför mer flygtid och att den blivande
          piloten därigenom får avsevärt mycket mer rutin och träning i svåra
          scenarion. På detta sätt hjälper simulatorn, med sina mycket
          välrenommerade instruktörer, till att skapa bättre piloter som är
          tryggare i sina arbetssituationer. Vi erbjuder även allmänheten
          möjligheten att prova på att flyga en helikopter i denna riskfria
          miljö. En uppskattad upplevelse. Läs mer om vårt simulator för
          alllmänheten under vårt presentpaket. Kontakta oss på Proflight så
          berättar vi mer.
        </h3>
      </div>
    </div>
  );
};

export default Simulator;
