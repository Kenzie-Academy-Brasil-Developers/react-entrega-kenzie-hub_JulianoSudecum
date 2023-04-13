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
    cursor:pointer;
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
    background: rgba(0,0,0,0.5);
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

    border-radius:5px;
    border: none;

    animation: containerAnimation 0.7s;

}

#modal__header{
    background-color:var(--grey-2);

    border-radius: 5px 5px 0px 0px;

    padding:1rem;
    font-size:14px;
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
    color:var(--grey-0);
    font-size:16px;
    font-weight: bold;
    border:none;
    cursor:pointer;
}

input, select{
    margin: 0rem 1rem;
    padding: 0rem 0.5rem;

    height: 50px;

    background-color: var(--grey-2);
    color:var(--grey-0);
    outline:none;
    
    border: 2px solid var(--grey-2);
    border-radius: 3px;

    transition: 0.5s;

    :focus{
        border:2px solid var(--grey-1);
    }
}

label{
    margin: 1rem 0rem 0.3rem 1rem;
    font-size:14px;
}

#create__tech{
    margin:1rem;

    padding: 0.6rem 1.2rem;
    background-color:var(--color-primary);

    border:none;
    border-radius: 3px;
    color: var(--grey0);
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

#open__modal{
    margin:0px;

    border-radius: 3px;
    border:none;

    font-weight:bold;

    width:30px;
    height:35px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:var(--grey-2);
    color:var(--grey-0);
}

#div__info > div{
    width:70%;
    display:flex;
    align-items:center;
    justify-content: space-between;
}

#ul__tech{
    width:70%;

    list-style:none;

    display:flex;
    flex-direction:column;
    align-items:center;

    padding:1rem;

    background-color:var(--grey-3);
    border-radius:3px;

}

#li__tech{
    background-color:var(--grey-4);
    display:flex;
    justify-content: space-between;
    padding: 0px 15px;

    width:90%;
    margin:10px;
    transition:0.7s;

    border-radius:3px;
    cursor:pointer;

    :hover{
        background-color:var(--grey-2);
    }
}

@media(max-width:768px){
    #div__info > div{
        width:85%;
    }
    #ul__tech{
        width:85%;
    }
}

@media(max-width:425px){
    #div__info > div{
        width:95%;
    }
    #ul__tech{
        width:95%;
    }
}
`