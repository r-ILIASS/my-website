import React from "react";
// Assets
import gitSquare from "../../assets/git-square.svg";
import javascriptSquare from "../../assets/javascript-square.svg";
import reactSquare from "../../assets/react-square.svg";
import nodeSquare from "../../assets/node-square.svg";
import expressSquare from "../../assets/express-square.svg";
import mongoSquare from "../../assets/mongodb-square.svg";
import pythonSquare from "../../assets/python-square.svg";
import htmlSquare from "../../assets/html-square.svg";
import cssSquare from "../../assets/css-square.svg";
import sassSquare from "../../assets/sass-square.svg";
// Styles
import { Wrapper, Content } from "./About.styles";

const About = () => (
  <section id="skills">
    <Wrapper>
      <Content>
        <h1>Skills</h1>
        <div className="contentWrapper">
          <img src={gitSquare} alt="git" />
          <img src={javascriptSquare} alt="javascript" />
          <img src={reactSquare} alt="react" />
          <img src={nodeSquare} alt="node" />
          <img src={expressSquare} alt="express" />
          <img src={mongoSquare} alt="mongo" />
          <img src={pythonSquare} alt="python" />
          <img src={htmlSquare} alt="html" />
          <img src={cssSquare} alt="css" />
          <img src={sassSquare} alt="sass" />
        </div>
      </Content>
    </Wrapper>
  </section>
);

export default About;
