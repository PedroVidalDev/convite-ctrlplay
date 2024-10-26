import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, #root {
        position: relative;
        display: flex;
        width: 100%;
        height: 100vh;
    }
`