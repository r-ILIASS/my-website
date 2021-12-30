import React from "react";

import Card from "../../components/Card";

import { Wrapper, Content, CardsContainer } from "./Coursework.styles";

import Image from "../../assets/thumb__movies-gallery.jpeg";

const projects = [
  {
    title: "Movies Gallery",
    description:
      "A React Application where I excerciced fetching data from an api, conditional rendering, hooks, authentication and authorization.",
    liveLink: "http://github.com/r-iliass",
    githubLink: "http://github.com/r-iliass",
    image: "../../assets/thumb__movies-gallery.jpeg",
  },
  {
    title: "Movies Gallery",
    description:
      "A React Application where I excerciced fetching data from an api, conditional rendering, hooks, authentication and authorization.",
    liveLink: "http://github.com/r-iliass",
    githubLink: "http://github.com/r-iliass",
  },
  {
    title: "Movies Gallery",
    description:
      "A React Application where I excerciced fetching data from an api, conditional rendering, hooks, authentication and authorization.",
    liveLink: "http://github.com/r-iliass",
    githubLink: "http://github.com/r-iliass",
  },
  {
    title: "Movies Gallery",
    description:
      "A React Application where I excerciced fetching data from an api, conditional rendering, hooks, authentication and authorization.",
    liveLink: "http://github.com/r-iliass",
    githubLink: "http://github.com/r-iliass",
  },
  {
    title: "Movies Gallery",
    description:
      "A React Application where I excerciced fetching data from an api, conditional rendering, hooks, authentication and authorization.",
    liveLink: "http://github.com/r-iliass",
    githubLink: "http://github.com/r-iliass",
  },
];

const Coursework = () => (
  <section id="projects">
    <Wrapper>
      <Content>
        <h3>Coursework & Projects</h3>
        <CardsContainer>
          {projects.map((project) => (
            <Card
              image={Image}
              title={project.title}
              description={project.description}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </CardsContainer>
      </Content>
    </Wrapper>
  </section>
);

export default Coursework;
