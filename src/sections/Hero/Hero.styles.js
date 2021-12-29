import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 56px);
  background: url(${({ background }) => background});
  background-size: 1920px, cover;
  /* background-position: center; */

  @media screen and (max-width: 768px) {
    height: 768px;
    background-size: 1280px;
  }

  @media screen and (min-width: 600px) {
    background-position: center;
  }

  @media screen and (max-width: 526px) {
    height: 668px;
  }
`;

export const Content = styled.div`
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 150px;

  @media screen and (max-width: 768px) {
    padding-top: 120px;
  }

  p {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 80px;

    @media screen and (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 53px;
    }

    @media screen and (max-width: 526px) {
      font-size: 20px;
    }
  }

  img {
    width: 130px;
    transition: transform 0.3s;

    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }

    @media screen and (max-width: 768px) {
      width: 110px;
    }
  }
`;

export const Button = styled.button`
  font-size: 36px;
  font-weight: 600;
  padding: 10px;
  margin-bottom: 50px;
  color: var(--white);
  border-radius: 10px;
  background: var(--red);
  transition: transform 0.3s;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }

  @media screen and (max-width: 526px) {
    font-size: 22px;
  }
`;
