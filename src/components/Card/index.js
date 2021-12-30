import React from "react";

import { CardWrapper, ImageWrapper, TextWrapper, Links } from "./Card.styles";

import gitIcon from "../../assets/githubLink.svg";
import linkIcon from "../../assets/link.svg";
import MovieImage from "../../assets/thumb__movies-gallery.jpeg";

const Card = ({ image, title, description, liveLink, gitHubLink }) => (
  <CardWrapper>
    <ImageWrapper image={MovieImage} />
    <TextWrapper>
      <h5>Project Title</h5>
      <p>
        A React Application where I excerciced fetching data from an api,
        conditional rendering, hooks, authentication and authorization.
      </p>
      <Links>
        <a href="https://github.com/" target="_blank">
          <img src={linkIcon} alt="live-website" />
        </a>
        <a href="https://github.com/" target="_blank">
          <img src={gitIcon} alt="source-code" />
        </a>
      </Links>
    </TextWrapper>
  </CardWrapper>
);

export default Card;
