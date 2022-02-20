import styled from "styled-components";

export const Button = styled.button`
  background: none;
  width: ${({ isVisible }) => (isVisible ? "60px" : "2px")};
  position: fixed;
  bottom: 40px;
  right: ${({ isVisible }) => (isVisible ? "40px" : "-90px")};
  z-index: 100;
  transition: all 0.7s;

  @media screen and (max-width: 414px) {
    max-width: 50px;
  }

  /* opacity: ${({ isVisible }) => (isVisible ? "100" : "0")}; */
  svg {
    color: var(--red);

    :hover {
      cursor: pointer;
    }
  }
`;
