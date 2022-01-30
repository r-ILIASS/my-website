import React from "react";

import { Wrapper, Content, Button } from "./Hero.styles";

import background from "../../assets/hero__background.jpg";
import pdf from "../../assets/pdfLogo.svg";

const Hero = () => (
  <Wrapper background={background}>
    <Content>
      <p>
        I am a Computer Engineering graduate and
        <br />a Front-End Web Developer looking for
        <br />
        an internship or a junior position
      </p>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <Button>Checkout my resume</Button>
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <img src={pdf} alt="resume" />
      </a>
    </Content>
  </Wrapper>
);

export default Hero;
