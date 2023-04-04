import styled from "styled-components";

export const HeaderStyled = styled.header`

background-color: var(--grey-4);
padding: 2rem;

display: flex;
justify-content: center;
align-items: center;
flex-direction: row;

border-bottom: 1px solid var(--grey-2);
    div{
        width: 80%;
        display: flex;
        justify-content: space-between;
    }

    div > button{
        background-color: var(--grey-2);
        color: var(--grey-0);
        border:none;
        padding: 0.5rem 1rem;
        border-radius:3px;
        cursor:pointer;
        transition:1s;

        :hover{
            background-color:var(--grey-1);
        }
    }

    div > img{
        object-fit:none;
    }
`