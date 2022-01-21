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
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  color: var(--white);

  @media screen and (max-width: 916px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1370px) {
    justify-content: space-around;
  }

  .col2 {
    @media screen and (min-width: 493px) {
      min-width: 419px;
    }
  }

  h3 {
    font-size: 38px;
    font-weight: 600;
    margin-bottom: 18px;

    @media screen and (max-width: 1370px) {
      font-size: 28px;
    }

    @media screen and (max-width: 492px) {
      font-size: 22px;
    }
  }

  p {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 12px;

    @media screen and (max-width: 1370px) {
      font-size: 18px;
    }

    @media screen and (max-width: 492px) {
      font-size: 16px;
    }

    @media screen and (max-width: 375px) {
      font-size: 14px;
    }

    :last-child {
      @media screen and (max-width: 916px) {
        margin-bottom: 40px;
      }
    }
  }

  ul {
    padding-left: 30px;
    margin-bottom: 24px;
    li {
      font-size: 26px;
      font-weight: 500;

      @media screen and (max-width: 1370px) {
        font-size: 18px;
      }

      @media screen and (max-width: 492px) {
        font-size: 16px;
      }
    }
  }
`;
