import styled from "styled-components";

export const StyledForm = styled.section`
    border: 2px solid var(--color-grey-20);
    border-radius: 4px;


    h1 {
    font-weight: 700;
    font-size: 1.8rem;
    }

    form {
    display: flex;
    flex-direction: column;
    width: 250px;
    @media(min-width: 600px){
      width: 300px;
    }

    label {
      margin-top: 10px;
    }

    input {
      height: 35px;
      border: 1.5px solid var(--color-grey-0);
      border-radius: 4px;
      background-color: var(--color-grey-0);
      padding: 3px 0 0 5px;
    }
    input:focus{
      background-color: var(--color-background);
    }

    p {
        color: var(--color-secondary);
    }

    button {
      color: var(--color-text-in-primary);
      font-size: 1.4rem;
      font-weight: 600;
      background-color: var(--color-primary);
      height: 35px;
      border: none;
      border-radius: 4px;
      margin-top: 15px;
    }
  }

  .redirect-register{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      span{
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-grey-50);
        }
        a{
            margin-top: 10px;
            color: var(--color-grey-100);
            font-weight: 600px;
            text-decoration: none;
            background-color: var(--color-grey-20);
            width: 100%;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }
  }

  .register-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .redirect-login{
    font-size: 1.2rem;
    color: var(--color-grey-50);
  }
`;
