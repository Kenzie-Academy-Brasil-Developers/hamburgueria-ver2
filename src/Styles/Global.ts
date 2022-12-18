import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --color-background: #ffffff;
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;
    --color-primary-light: #dfefd9;
    --color-primary-dark: #78a468;
    --color-primary-transparent: rgba(100, 180, 71, 0.2);
    --color-text: #3d3d3d;
    --color-text-in-primary: #ffffff;
    --color-text-complement: #a3a3a2;
    --color-text-light: #c9c9c9;
    --color-red: #b4423e;
    --color-tertiary: #edb12a;
    --color-quartiary: #464745;
    --color-success: #7cc39c;
    --color-warning: #fbea85;
    --color-error: #ea524f;
    --color-information: #155bcb;
    --color-grey-100: #333333;
    --color-grey-50: #828282;
    --color-grey-20: #e0e0e0;
    --color-grey-0: #F5F5F5;
    font-size: 60%;
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body,
  html {
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  main{
    width: 100vw;
    height: 100vh;
  }
  

  body,
  input,
  button,
  textarea {
    font-family: "inter", sans-serif;
    font-size: 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 3px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


`;


export default GlobalStyle;