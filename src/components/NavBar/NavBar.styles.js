import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  color: var(--white);
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    font-size: 28px;
    font-weight: 300;
    color: #afafaf;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    margin-bottom: 6px;
    background: var(--white);
    border-radius: 5px;

    :last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

export const MenuLink = styled.a`
  font-size: 22px;
  font-weight: 400;
  margin-left: 42px;
  color: var(--white);
  transition: color 0.3s;
  cursor: pointer;

  :first-child {
    margin-left: 0;
  }

  :hover {
    color: var(--red);
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin: 20px 0;
  }
`;
