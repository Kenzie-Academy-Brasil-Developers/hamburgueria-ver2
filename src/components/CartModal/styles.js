import styled from "styled-components";

export const StyledCartModal = styled.div`
  z-index: 1;
  background-color: #00000070;
  width: 100vw;
  height: 110vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  overflow-y: scroll;


  .cart-header {
      height: 50px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0 0 20px;
      background-color: var(--color-primary);
      border-radius: 6px 6px 0 0;

      color: var(--color-text-in-primary);
      font-size: 1.4rem;
      button {
        background-color: transparent;
        border: none;
        color: #fff;
        width: 35px;
        height: 35px;
      }
    }

    .cart-items {
      min-width: 100%;
      min-height: 50px;
      max-height: 250px;
      overflow-y: scroll;
      padding: 10px;
      @media (min-width: 800px) {
        min-height: 90px;
        max-height: 350px;
      }
    }
    .cart-infos {
      border-top: 1px solid var(--color-grey-20);
      justify-content: space-between;
      padding: 12px 10px 12px 10px;
      display: flex;
      min-width: 100%;
    }
    .remove-all-items {
      height: 40px;
      width: 85%;
      align-self: center;
      justify-content: center;
      border: none;
      background-color: var(--color-grey-20);
      border-radius: 6px;
      font-weight: 600;
      font-size: 1.4rem;
    }
    
    section {
      position: fixed;
      top: 16vh;
    }
    .section-organizer {
        background-color: var(--color-background);
        border-radius: 6px;
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
    }


`;
