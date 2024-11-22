import React from "react";
import { LANG } from "../utils/langConstants";

const About = ({ lang }) => {
  const data = LANG[lang];
  return (
    <div>
      <h1>{data.title} </h1>
      <p>{data.desc}</p>
      <h2>{data.title2} </h2>
      <p>{data.desc}</p>
      <h3>{data.title3} </h3> 
      <p>{data.desc}</p>
      <h4>{data.title4} </h4>
      <p>{data.desc}</p>
    </div>
  );
};

export default About;
