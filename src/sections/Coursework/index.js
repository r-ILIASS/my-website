import React from "react";
// Components
import Card from "../../components/Card";
// Styles
import { Wrapper, Content, CardsContainer } from "./Coursework.styles";
// Assets
import EngineUi from "../../assets/engineui.png";
import Mtable from "../../assets/mtable.png";
import MtableBackend from "../../assets/mtable_backend.png";
import MoviesCover from "../../assets/thumb__movies-gallery.png";
import EshopCover from "../../assets/thumb__eshop.png";

const projects = [
  {
    id: 1,
    title: "M-Table",
    description:
      "A React application where I exercised OOP JavaScript's best practices and bleeding edge ES6 features. This app covers 100% reusable functional components, custom hooks, composition over inheritance, error handling & logging, client-side pagination/sorting, and much more.",
    liveLink: "https://mtable.netlify.app/movies",
    githubLink: "https://github.com/r-ILIASS/m-table",
    image: Mtable,
  },
  {
    id: 2,
    title: "M-Table backend",
    description:
      "A complete NodeJs backend for M-Table featuring ExpressJs and MongoDB. This backend provides API endpoints for all CRUD operations. I demonstrate in this application the use of Custom middleware, Monkey-patching ExpressJs routes, Refactoring for a readable code, Password Encryption using Bcrypt, JsonWebToken, authentication, and authorization.",
    liveLink: "https://mockmoviesbackend.herokuapp.com/api/movies",
    githubLink: "https://github.com/r-ILIASS/moviesBackend",
    image: MtableBackend,
  },
  {
    id: 3,
    title: "Engine Ui",
    description:
      "A minimalist React application displaying data fetched from the Google API. This application exhibits a clean and simple UI built with TailwindCss and features global (light/dark) themes, the use of React Context, and debounced values.",
    liveLink: "https://engineui.netlify.app/search",
    githubLink: "https://github.com/r-ILIASS/search-engine-ui",
    image: EngineUi,
  },
  {
    id: 4,
    title: "Movies Gallery",
    description:
      "A React application built on the famous TMDB API. In this application, I handled multiple API calls, persisted the state in the session storage to improve performance, used Context to avoid prop drilling and custom hooks to add abstraction to the main pages and simplify their implementation.",
    liveLink: "https://reactmoviesgallery.netlify.app/",
    githubLink: "https://github.com/r-ILIASS/movies-gallery",
    image: MoviesCover,
  },
  {
    id: 5,
    title: "eShop",
    description:
      "A clean and minimalist React application built on CommerceJs's headless API, Stripe, and MaterialUI. eShop fetches the needed data from CommerceJs and handles adding items to the cart then sends its data back to CommerceJs, checkout is managed by Stripe.",
    liveLink: "https://reactjs-e-shop.netlify.app/",
    githubLink: "https://github.com/r-ILIASS/e-shop",
    image: EshopCover,
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
              key={project.id}
              image={project.image}
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
