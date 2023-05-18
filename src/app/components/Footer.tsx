import React from "react";

export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__maininfocontainer">
        <h1 className="footer__main-title"> Allt börjar med ett presentkort</h1>

        <button className="footer__button">Gå till webshoppen</button>
      </div>
      <div className="footer__cardcontainer">
        <div className="footer__card">
          <img className="footer__image" src="heli2.png" alt="" />

          <div className="footer__infocontainer">
            <h1 className="footer__title">KÖP PRESENTKORT</h1>
            <h3 className="footer__subtitle">
              Önskar du ge bort ett Presentkort till någon du tycker om, vill
              överraska eller kanske en gåva till en kund. Presentkortet hos oss
              ger den du ger kortet till möjligheten att själv välja om hen vill
              åka på en taxiflygning, ett rundflyg eller varför inte prova på
              att spaka själv i form av en provlektion. Finns även möjlighet att
              få använda det som ett pass i vår Simulator.
            </h3>
            <button className="footer__button">Köp presentkort</button>
          </div>
        </div>
        <div className="footer__card">
          <img className="footer__image" src="heli5.png" alt="" />

          <div className="footer__infocontainer">
            <h1 className="footer__title">KÖP HELIKOPTER</h1>
            <h3 className="footer__subtitle">
              Vi har köpt och sålt Helikoptrar inom Proflight i mer än 40år.
              Denna erfarenhet tillsammans med våra goda referenser har gjort
              att vi idag sitter som Generalagentur inte bara på hos 1 utan hos
              2 tillverkare. Vi säljer/förmedlar både nya och gamla Bell och
              Enström helikoptrar Vår sista riktigt stora affär var att förmedla
              7 nya toppmoderna Bell 429 till Svenska Polisen. Helt enligt deras
              önskemål och specifikationer. Så drömmer du eller går i tankar att
              du skulle vilja skaffa en egen helikopter? Vi på Proflight hjälpe
              dig till en säker och trygg affär med mer än 40års erfarenhet. Vi
              har även kontakter för att hjälpa er med riktigt
              konkurrenskraftiga finansieringar.
            </h3>
            <button className="footer__button">Köp presentkort</button>
          </div>
        </div>
      </div>
    </div>
  );
};
