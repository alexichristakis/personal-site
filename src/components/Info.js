import React from "react";
import { Parallax } from "react-scroll-parallax";

// const resume_link = "https://drive.google.com/open?id=1TkXsFwqSSTloQX7oSnBewpa6WwgZ5qfq";
// const resume_link =
//   "https://drive.google.com/uc?authuser=0&id=1TkXsFwqSSTloQX7oSnBewpa6WwgZ5qfq&export=download";
const github_link = "https://github.com/alexichristakis";
const linkedin_link = "https://www.linkedin.com/in/alexi-christakis-b53b9214b/";
const sandbox_link = "https://sandboxatyale.com/";

const Info = ({ onClickName }) => (
  <div className={"info-container"}>
    <Parallax offsetYMax={"200%"} offsetYMin={"-200%"}>
      <div className="svg-wrapper-name">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape-name" height="60" width="320" />
        </svg>
        <h1 className="name" onClick={onClickName}>
          Alexi Christakis
        </h1>
      </div>
    </Parallax>
    <Parallax offsetYMax={"100%"} offsetYMin={"-100%"}>
      <h2 className="link" onClick={() => window.open(github_link)}>
        GitHub
      </h2>
    </Parallax>

    <h2 className="link" onClick={() => window.open(linkedin_link)}>
      LinkedIn
    </h2>

    <Parallax offsetYMax={"140%"} offsetYMin={"-100%"} slowerScrollRate>
      <h2 className="link" onClick={() => window.open(sandbox_link)}>
        Sandbox
      </h2>
    </Parallax>
  </div>
);

export default Info;
