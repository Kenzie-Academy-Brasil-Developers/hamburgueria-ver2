import styled from "styled-components";

export const StyledLogin = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  width: 100vw;
  height: 100vh;
  gap: 40px;
  
  @media(max-width: 700px){
    flex-direction: column;
    gap: 0;
  }
  section {
    padding: 15px;
    }
`;
