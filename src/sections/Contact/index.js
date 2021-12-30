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
          <a href="https://github.com/" target="_blank">
            <img src={telegramIcon} alt="telegram" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={linkedinIcon} alt="linkedin" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="github" />
          </a>
        </div>
      </Content>
    </Wrapper>
  </section>
);

export default Contact;
