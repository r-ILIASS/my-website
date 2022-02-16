import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgb(35, 34, 34);
  background: radial-gradient(
    circle,
    rgba(35, 34, 34, 1) 0%,
    rgba(28, 28, 28, 1) 100%
  );
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    text-align: center;
    font-size: 38px;
    color: var(--white);
    margin-bottom: 40px;
  }

  .contentWrapper {
    width: 100%;
    margin-bottom: 20px;
    color: var(--white);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 100px));
    grid-gap: 26px;

    @media screen and (max-width: 1280px) {
      grid-gap: 40px;
    }

    @media screen and (max-width: 768px) {
      grid-gap: 55px;
    }

    @media screen and (max-width: 414px) {
      grid-gap: 33px;
    }

    @media screen and (max-width: 375px) {
      grid-gap: 13px;
    }

    img {
      width: 100px;
      margin: auto;
    }
  }
`;
