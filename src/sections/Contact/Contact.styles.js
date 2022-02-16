import styled from "styled-components";

export const Wrapper = styled.div`
  background: radial-gradient(
    circle,
    rgba(35, 34, 34, 1) 0%,
    rgba(28, 28, 28, 1) 100%
  );
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
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .social {
    display: flex;
    gap: 20px;

    img {
      width: 20px;
    }
  }
`;
