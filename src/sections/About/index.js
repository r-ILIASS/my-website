import React from "react";

import { Wrapper, Content } from "./About.styles";

const About = () => (
  <section id="about">
    <Wrapper>
      <Content>
        <div className="col1">
          <h3>About Me</h3>
          <p>
            I am a Computer Enginnering graduate and a self-taught
            <br />
            Web Developer who enjoys JavaScript’s ecosystem, I like
            <br />
            spending my day coding and learning anything related to
            <br />
            programming and computers.
          </p>
          <p>
            I am looking for an internship or a junior position where I<br />
            can learn from experienced developpers and provide
            <br />
            value.
          </p>
          <p>
            My short-term goal is to take my JavaScript skills to the
            <br />
            next level and learn more data structures & algorithms.
          </p>
        </div>
        <div className="col2">
          <h3>Interpersonal & Soft Skills</h3>
          <ul>
            <li>Great oral and written communication in English</li>
            <li>Fluent in three foreign languages</li>
            <li>Patience when dealing with others</li>
            <li>Great at managing conflict</li>
            <li>Very healthy ego</li>
            <li>Team-Player</li>
          </ul>
          <h3>Foreign Languages</h3>
          <p>English - French - Arabic - Russian (Beginner)</p>
        </div>
      </Content>
    </Wrapper>
  </section>
);

export default About;
