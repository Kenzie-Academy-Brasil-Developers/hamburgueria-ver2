import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: var(--color-grey-0);
  height: 80px; 
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8vw;
  
  @media (min-width: 800px) {
    padding: 0 12vw;
  }
  @media (max-width:600px ){
    
  }
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        .header-btn{
          width: 25px;
          height: 35px;
        }
        @media (max-width: 600px) {
          .header-btn{
            min-width: 20px;
            height: 30px;
          }
        }
    }
  }
`;
