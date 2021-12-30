import React from "react";

import { CardWrapper, ImageWrapper, TextWrapper, Links } from "./Card.styles";

import gitIcon from "../../assets/githubLink.svg";
import linkIcon from "../../assets/link.svg";
import MovieImage from "../../assets/thumb__movies-gallery.jpeg";

const Card = ({ image, title, description, liveLink, githubLink }) => (
  <CardWrapper>
    <ImageWrapper image={image} />
    <TextWrapper>
      <h5>{title}</h5>
      <p>{description}</p>
      <Links>
        <a href={liveLink} target="_blank">
          <img src={linkIcon} alt="live-website" />
        </a>
        <a href={githubLink} target="_blank">
          <img src={gitIcon} alt="source-code" />
        </a>
      </Links>
    </TextWrapper>
  </CardWrapper>
);

export default Card;
