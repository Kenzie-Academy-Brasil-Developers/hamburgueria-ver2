import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  height: 120px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-background);
  align-self: center;
  justify-self: center;
  gap: 23px;

  @media (min-width: 800px) {
    height: fit-content;
  }

  figure img {
    width: 98%;
    height: 98%;
  }
  figure {
    width: 75px;
    border-radius: 6px;
    background-color: var(--color-grey-0);
  }
  .remove-item {
    position: relative;
    bottom: 22px;
  }

  .card-infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 5px;
  }

  .card-infos h3 {
    font-size: 1.6rem;
  }
  .card-infos p {
    font-size: 1.3rem;
  }

  span {
    font-size: 1.6rem;
    background-color: var(--color-background);
    width: 31px;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 4px;
  }
  .item-wrapper {
    display: flex;
    gap: 20px;
  }

  .add-remove-btns{
    width: 75px;
    height: 25px;
    background-color: var(--color-grey-20);
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: relative;
    top: 15px; */
  }
  .add-btn, .remove-btn{
    background-color: transparent;
    border: none;
    color: var(--color-secondary);
    font-size: 2.4rem;
    
    width: 22px;
  }
`;
