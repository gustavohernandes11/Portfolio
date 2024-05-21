import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
}
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Ubuntu', sans-serif;
 margin: 0;
}
body {
  overflow-x: hidden;
  min-height: 100vh;
    ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-track {
  background-color: #ececec;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #030303;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #161616;
  }
}

html,
body,
button,
textarea,
input {
  font-family: 'Ubuntu', sans-serif;
  @media (max-width: 768px) {
    font-size: 93.75%;
  }
  @media (max-width: 425px) {
    font-size: 87.50%;
  }
}
`;

export default GlobalStyle;
