import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { HeaderStyled } from "./style"

export const HeaderHome = () => {
    const navigate = useNavigate()

    function clickFunction(){
        localStorage.clear()
        navigate("/")
        toast.info("Você fez logout", {autoClose:2500, theme:"dark"})
    }

    return(
        <HeaderStyled>
            <div>
                <img src="src\assets\Logo.png" alt="" />
                <button onClick={clickFunction} id="button__logout">Sair</button>
            </div>
        </HeaderStyled>
    )
}