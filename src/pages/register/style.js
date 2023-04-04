import styled from "styled-components";

export const LoginContainer = styled.div`
color: var(--grey-0);
background-color: var(--grey-4);
height:100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


gap: 1rem;

header{
    display:flex;
    align-items:center;
    justify-content:center;

    gap: 5rem;

    button{
        padding: 0.5rem 1.2rem;
        background-color:var(--grey-3);
        color:var(--grey-0);
    }
}

form{
    display:flex;
    flex-direction:column;
    gap: 0.5rem;
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
    font-size:14px;
    color:var(--grey-1);
}

button{
    height: 4vh;
    border-radius:3px;
    border:none;
    cursor: pointer;
}

p{
    text-align:center;
    margin:0px;
    font-size:12px;
    color:var(--grey-1);
}

#form__title{
    font-weight:bold;
    font-size:20px;
    color:var(--grey-0);

    margin-bottom:1rem;
}

#form__desc{
    font-size:16px;
    color:var(--grey-0);
    margin-bottom:1rem;
}

#button__confirm{
    background-color:var(--color-primary);
    color:var(--grey-0);
}

select{
    height:40px;
    color:var(--grey-0);
    background-color:var(--grey-2);
    border: 2px solid var(--grey-1);
    border-radius:3px;
    appearance:none;

    padding: 0px 1rem;
    outline:none;

    margin-bottom:5px;
}

`