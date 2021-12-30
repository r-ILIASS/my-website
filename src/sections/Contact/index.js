import React from "react";

import telegramIcon from "../../assets/telegram.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/githubsquare.svg";

import { Wrapper, Content } from "./Contact.styles";

const Contact = () => (
  <section id="contact">
    <Wrapper>
      <Content>
        <h3>Contact & Informations</h3>
        <p>iliass.root@gmail.com</p>
        <p>+212 6 89444004</p>
        <div className="social">
          <img src={telegramIcon} alt="telegram" />
          <img src={linkedinIcon} alt="linkedin" />
          <img src={githubIcon} alt="github" />
        </div>
      </Content>
    </Wrapper>
  </section>
);

export default Contact;
