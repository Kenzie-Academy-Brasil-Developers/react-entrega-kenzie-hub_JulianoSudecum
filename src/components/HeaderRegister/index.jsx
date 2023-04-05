import { useNavigate } from "react-router-dom"

export const HeaderRegister = () => {
    const navigate = useNavigate()

    function backLogin(){
        navigate("/")
    }

    return(
        <header>
            <img src="Logo.png" alt="" />
            <button onClick={backLogin} id="back__login">Voltar</button>
        </header>
    )
}