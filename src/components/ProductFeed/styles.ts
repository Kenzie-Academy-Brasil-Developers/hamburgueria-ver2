import styled from "styled-components";

export const StyledProductFeed = styled.ul`
  overflow-x: scroll;
  gap: 20px;
  min-height: 345px;
  width: 100%;
  height: fit-content;
  display: flex;
  margin-top: 20px;

  @media (min-width: 800px) {
    padding-right: 8vw;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    max-width: 85vw;
  }
`;
