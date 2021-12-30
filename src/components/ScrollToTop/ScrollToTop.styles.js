import styled from "styled-components";

export const Button = styled.button`
  background: none;
  max-width: 60px;
  position: fixed;
  bottom: 40px;
  right: ${({ isVisible }) => (isVisible ? "40px" : "-90px")};
  z-index: 100;
  transition: right 0.7s;

  /* opacity: ${({ isVisible }) => (isVisible ? "100" : "0")}; */
  svg {
    color: var(--red);

    :hover {
      cursor: pointer;
    }
  }
`;
