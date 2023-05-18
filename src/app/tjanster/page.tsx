import React from "react";
import { TjansterArticle } from "@/components/TjansterArticle";
import "../utbildningar/utbildningar.css";

const Tjanster = () => {
  return (
    <div>
      <div className="home__section1-container">
        <img className="home__section1-image" src="heli2.png" alt=""></img>
        <div className="home__section1-infocontainer">
          <h1 className="home__section1-title">Våra tjänster</h1>
        </div>
        <TjansterArticle />
      </div>
    </div>
  );
};

export default Tjanster;
