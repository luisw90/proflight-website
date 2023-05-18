import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="header__top-container"></div>
      <div className="header__bottom-container">
        <div className="header__logo">
          <img src="logo_black.png" alt=""></img>
        </div>
        <div className="header__button-container">
          <button className="header__button">
            <Link href="/start" className="link">
              Start
            </Link>
          </button>
          <button className="header__button">
            <Link href="/utbildningar" className="link">
              Utbildningar
            </Link>
          </button>
          <button className="header__button">
            <Link href="/simulator" className="link">
              Simulator
            </Link>
          </button>
          <button className="header__button">
            <Link href="/verkstad" className="link">
              Verkstad
            </Link>
          </button>
          <button className="header__button">
            <Link href="/tjanster" className="link">
              Tjänster
            </Link>
          </button>
          <button className="header__button">
            <Link href="/omoss" className="link">
              Om oss
            </Link>
          </button>
        </div>
        <div className="header__whitegradient"></div>
      </div>
    </header>
  );
};
