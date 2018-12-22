import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";

// const resume_link = "https://drive.google.com/open?id=1TkXsFwqSSTloQX7oSnBewpa6WwgZ5qfq";
const resume_link =
  "https://drive.google.com/uc?authuser=0&id=1TkXsFwqSSTloQX7oSnBewpa6WwgZ5qfq&export=download";
const github_link = "https://github.com/alexichristakis";
const linkedin_link = "https://www.linkedin.com/in/alexi-christakis-b53b9214b/";
const sandbox_link = "https://sandboxatyale.com/";

// const Links = [{url: resume_link, title: "Alexi Christakis"}, {url: }]

// const name = "Alexi Christakis".split("");
// const git = "GitHub".split("");
// const linked = "LinkedIn".split("");
// const sandbox = "Sandbox".split("");

class Info extends Component {
  state = {
    file: "",
    loading: true
  };

  render() {
    return (
      <div className={"info-container"}>
        <Parallax offsetYMax={200} offsetYMin={-200}>
          <div className={"link large"} header onClick={() => window.open(resume_link)}>
            Alexi Christakis
          </div>
        </Parallax>
        <Parallax offsetYMax={100} offsetYMin={-100}>
          <div className={"link"} onClick={() => window.open(github_link)}>
            GitHub
          </div>
        </Parallax>
        <div className={"link"} onClick={() => window.open(linkedin_link)}>
          LinkedIn
        </div>
        <Parallax offsetYMax={150} offsetYMin={-150} slowerScrollRate>
          <div className={"link space"} onClick={() => window.open(sandbox_link)}>
            Sandbox
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Info;
