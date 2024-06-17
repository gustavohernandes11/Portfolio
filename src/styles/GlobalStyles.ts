import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: "Ubuntu", sans-serif;
        margin: 0;
    }

    body {
        overflow-x: hidden;
        min-height: 100vh;

        ::-webkit-scrollbar {
            width: 0.85rem;
        }

        ::-webkit-scrollbar-track {
            background-color: #ececec;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.colors.darkPurple};
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: ${({ theme }) => theme.colors.purple};
        }
    }

    html,
    body,
    button,
    textarea,
    input {
        font-family: "Ubuntu", sans-serif;
    }
`;

export default GlobalStyle;
