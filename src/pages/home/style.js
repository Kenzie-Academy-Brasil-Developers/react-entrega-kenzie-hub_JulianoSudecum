import styled from "styled-components";

export const MainStyled = styled.main`
height:100%;
margin: 0 auto;
padding: 2rem;
gap: 1rem;
background-color: var(--grey-4);
color: var(--grey-0);

    #div__profile{
        display:flex;
        align-items:center;
        margin:0 auto;
        justify-content: space-around;
        padding: 1rem;
        padding-top: 0;
    }

    #div__info{
        border-top: 2px solid var(--grey-2);
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        padding: 2rem;
    }
`