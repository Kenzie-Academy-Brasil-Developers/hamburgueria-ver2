import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: var(--color-grey-0);
  height: 80px; 
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8vw;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
  }
`;
