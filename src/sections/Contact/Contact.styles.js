import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--lightGrey);
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);

  h3 {
    font-size: 38px;
    font-weight: 600;
    margin-bottom: 15px;

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }

  .social {
    display: flex;
    gap: 40px;

    @media screen and (max-width: 768px) {
      gap: 20px;
    }

    img {
      width: 48px;

      @media screen and (max-width: 768px) {
        width: 28px;
      }
    }
  }
`;
