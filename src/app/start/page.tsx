import React from "react";
import { Section1 } from "../../components/Section1";
import { Section2 } from "../../components/Section2";
import { Section3 } from "../../components/Section3";
import { Section4 } from "../../components/Section4";

const Start = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <div className="home__section3-container">
        <Section3 />
      </div>
      <Section4 />
    </div>
  );
};

export default Start;
