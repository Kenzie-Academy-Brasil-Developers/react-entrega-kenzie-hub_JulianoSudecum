import styled from "styled-components";

export const DivContainer = styled.div`
color: var(--grey-0);
background-color: var(--grey-4);
height:100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

gap: 1rem;


form{
    display:flex;
    flex-direction:column;
    gap: 1rem;
    width: 15vw;

    background-color:var(--grey-3);
    padding: 2rem;
    border-radius:3px;
}

input{
    height: 3vh;
    padding:0.5rem 1.2rem;
    color:var(--grey-0);
    outline:none;
    border: 2px solid var(--grey-1);
    border-radius:3px;  
    background-color: var(--grey-2);
}

label{
    margin:0px;
    padding:0px;
}

button{
    height: 4vh;
    border-radius:3px;
    border:none;
    cursor: pointer;
}

h6{
    text-align:center;
    font-size: 14px;
    color:var(--grey-1);
}

h3{
    text-align:center;
}

p{
    margin:0px;
    padding: 0px;
    font-size:12px;
    color: var(--grey-1);
}

#button__confirm{
    background-color:var(--color-primary);
    color:var(--grey-0);
}

#button__register{
    background-color: var(--grey-1);
    color:var(--grey-0);
}

#error__message{
    color:var(--color-primary);
}

@media(max-width:1440px){
    form{
        width:30vw;
    }
}
@media(max-width:768px){
    form{
        width: 50vw;
    }
}
@media(max-width:425px){
    form{
        width: 70vw;
    }
}
`
