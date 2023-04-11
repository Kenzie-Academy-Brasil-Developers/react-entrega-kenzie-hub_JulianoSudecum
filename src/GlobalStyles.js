import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;

body{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;

    height: 100vh;

    background-color: var(--grey-4);
}


*{
    font-family: 'Inter', sans-serif;
}
}
`