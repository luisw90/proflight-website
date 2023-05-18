import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="header__container">
      <button className="header__logo">
        <img src="logo_black.png" alt=""></img>
      </button>
      <div className="header__button-container">
        <button className="header__button">Start</button>
        <button className="header__button">
          <Link href="/utbildningar" className="link">
            Utbildningar
          </Link>
        </button>
        <button className="header__button">Simulator</button>
        <button className="header__button">Verkstad</button>
        <button className="header__button">Tjänster</button>
        <button className="header__button">Om oss</button>
      </div>
      <div className="header__whitegradient"></div>
    </header>
  );
};
