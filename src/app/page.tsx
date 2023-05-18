import Image from "next/image";
import { Header } from "./components/Header";
import { HeaderArticles } from "./components/HeaderArticles";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="home__section1-container">
        <img className="home__section1-image" src="heli2.png" alt=""></img>
        <div className="home__section1-infocontainer">
          <h1 className="home__section1-title">Vill du bli Helikopterpilot?</h1>
          <h3 className="home__section1-subtitle">
            Grattis, då har du hittat rätt! Proflight Nordic är ledande i
            utvecklingen av pilotprogram i norden. Vi förverkligar din dröm om
            att bli helikopterpilot.
          </h3>
          <button className="home__section1-button">Läs mer</button>
        </div>
      </div>
      <div className="home__section2-container">
        <h1 className="home__section2-title">
          VÄLKOMMEN TILL PROFLIGHT NORDIC
        </h1>
        <h3 className="home__section2-subtitle">
          Vill du bli helikopterpilot eller behöver helikoptertjänster. Grattis,
          då har du hittat rätt! Med mer än 40 års erfarenhet är Proflight
          Nordic ledande och den mest meriterande Flygskolan i Norden. Samtidigt
          har vårt systerföretag Roslagenshelikopterflyg opererat kommersiellt
          lika många år. Vi förverkligar din dröm om att bli helikopterpilot.
          Behöver du helikoptertjänster har du hittat rätt.
        </h3>
      </div>
      <div className="home__section3-container">
        <HeaderArticles />
      </div>
      <Footer />
    </main>
  );
}
