import styled from "styled-components";

export const CardWrapper = styled.div`
  max-width: 440px;
  min-height: 440px;
  box-shadow: 0 0.25rem 1rem rgb(0 0 0 / 0.1);
`;

export const ImageWrapper = styled.div`
  height: 220px;
  background: url(${({ image }) => image});
  background-size: 100%, cover;
`;

export const TextWrapper = styled.div`
  padding: 20px;
  position: relative;

  h5 {
    font-size: 34px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  p {
    font-size: 23px;
    font-weight: 400;
  }
`;

export const Links = styled.div`
  position: absolute;
  top: 17px;
  right: 20px;
  display: flex;
  gap: 18px;
  img {
    width: 45px;
  }
`;
