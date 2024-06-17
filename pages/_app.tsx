import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/Theme";
import GlobalStyle from "../src/styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
