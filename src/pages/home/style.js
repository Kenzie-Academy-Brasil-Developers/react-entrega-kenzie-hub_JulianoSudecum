import styled from "styled-components";

export const MainStyled = styled.main`
height:100%;
margin: 0 auto;
padding: 2rem;
gap: 1rem;
background-color: var(--grey-4);
color: var(--grey-0);

body.active-modal {
    overflow-y: hidden;
}

#open__modal {
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
}

#div__container, #overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
}

#overlay {
    background: rgba(49,49,49,0.8);
}
#modal__container {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: var(--grey-3);
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;

    width:30vw;
    height:30vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#modal__container input{
    height:30px;
}

#modal__header{
    background-color:var(--grey-2);
}

#modal__header h3{
    margin:0px;
    padding:0px;
}

#modal__close {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;

    background-color:transparent;
    border:none;
}

animation: containerAnimation 1s;

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

    @keyframes containerAnimation{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`