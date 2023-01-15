import React from "react";

const educations = [
  { title: "high school", years: "1993-2003", ImageURL: "./img/ahlah.jpeg" },
  {
    title: "Bachelor's degree",
    years: "2003-2007",
    ImageURL: "./img/UBUlogo.png",
  },
  {
    title: "Master's degree",
    years: "2009-2012",
    ImageURL: "./img/paichai_logo.jpeg",
  },
];

const Education = () => {
  educations.map((educations, index) => {
    return (
      <div key={index}>
        <div>
          <img src={educations.ImageURL} />
        </div>
        <div>
          <h2>{educations.title}</h2>
          <p> {educations.years}</p>
        </div>
      </div>
    );
  });
};

export default Education;
