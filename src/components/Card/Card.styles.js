import styled from "styled-components";

export const CardWrapper = styled.div`
  max-width: 440px;
  background: #fff;
  box-shadow: 0 0.25rem 1rem rgb(0 0 0 / 0.1);
`;

export const ImageWrapper = styled.div`
  height: 220px;
  background: url(${({ image }) => image});
  background-size: 100%, cover;
  @media screen and (max-width: 414px) {
    background-size: 120%, cover;
  }
`;

export const TextWrapper = styled.div`
  padding: 20px;
  min-height: 424px;

  h5 {
    font-size: 34px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  p {
    font-size: 22px;
    font-weight: 400;
  }
`;

export const Links = styled.div`
  width: 91%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 10px;

  a {
    text-decoration: underline;
    color: #000;
    font-size: 1.2rem;
  }
`;
