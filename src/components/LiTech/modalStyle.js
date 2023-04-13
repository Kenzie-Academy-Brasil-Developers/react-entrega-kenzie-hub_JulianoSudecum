import styled from "styled-components";

export const ModalStyled = styled.div`

animation: modalAnimation 0.7s;

#div__buttons{
    margin: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    gap: 10px;
}

#div__buttons button{
    padding: 0.5rem 1rem;
    border-radius: 3px;
    border:none;
    color:var(--grey-0);
    cursor:pointer;
}

#patch__button{
    width:60%;
    background-color:var(--color-primary);
}

#delete__button{
    width:40%;
    background-color:var(--grey-1);
}


@keyframes modalAnimation{
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
}

`