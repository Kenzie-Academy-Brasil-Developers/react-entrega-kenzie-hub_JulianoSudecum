import { Link } from "react-router-dom"
import { HeaderRegisterStyled } from "./style"

export const HeaderRegister = () => {

    return(
        <HeaderRegisterStyled>
            <img src="Logo.png" alt="" />
            <Link to={"/"} id="back__login">Voltar</Link>
        </HeaderRegisterStyled>
    )
}