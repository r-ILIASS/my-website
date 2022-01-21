import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--milkBlue);
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 40px 0;

  h3 {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;

    @media screen and (max-width: 414px) {
      font-size: 28px;
    }
  }
`;

export const CardsContainer = styled.div`
  max-width: 1068px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 60px;
`;
