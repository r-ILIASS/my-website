import React from "react";

import { CardWrapper, ImageWrapper, TextWrapper, Links } from "./Card.styles";

const Card = ({ image, title, description, liveLink, githubLink }) => (
  <CardWrapper>
    <ImageWrapper image={image} />
    <TextWrapper>
      <h5>{title}</h5>
      <p>{description}</p>
      <Links>
        <a href={githubLink} target="_blank" rel="noreferrer">
          Source Code
        </a>
        <a href={liveLink} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </Links>
    </TextWrapper>
  </CardWrapper>
);

export default Card;
