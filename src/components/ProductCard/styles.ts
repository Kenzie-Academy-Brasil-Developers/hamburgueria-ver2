import styled from "styled-components";

export const StyledCard = styled.li`
  background-color: var(--color-grey-20);
  height: 320px;
  min-width: 225px;

  display: flex;
  flex-direction: column;
  border: 2.5px solid var(--color-grey-20);
  border-radius: 6px;

  @media (min-width: 800px) {
    width: 240px;
  }
  figure img {
    height: 100%;
  }
  figure {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 150px;
    align-self: center;
    overflow: hidden;
    background-color: var(--color-grey-0);
  }
  .card-infos {
    background-color: var(--color-background);
    width: 100%;
    height: 55%;
    border-radius: 0 0 6px 6px;
    padding: 15px 12px;

    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  span {
    font-weight: 600;
    color: var(--color-primary);
  }

  button {
    width: fit-content;
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    color: var(--color-text-in-primary);
    background-color: var(--color-primary);
  }
`;
