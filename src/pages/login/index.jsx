import { useForm } from "react-hook-form"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { formSchema } from "./formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { DivContainer } from "./style"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { AuthContext } from "../../providers/AuthContext"


export const Login = () => {

    const { register, handleSubmit, formState: { errors }  } = useForm({
        resolver: zodResolver(formSchema)
    })
    // const navigate = useNavigate()
 
    const { loginRequest } = useContext(UserContext)
    const {  LoginAuth } = useContext(AuthContext)
   


    return(
        <DivContainer>
            <img src="Logo.png" alt="" />
            <form onSubmit={handleSubmit(loginRequest)}>
                <h3>Login</h3>
                <label htmlFor="email">Email</label>
                <input onChange={(event) => { setEmail(event.target.value)}} name="email" type="text" placeholder="Digite seu email aqui..." {...register("email")} />
                {errors.email ? <p id="error__message">{errors.email.message}</p> : null}

                <label htmlFor="password">Senha</label>
                <input onChange={(event) => { setPassword(event.target.value)}} name="password" type="password" placeholder="Digite sua senha aqui..." {...register("password")} />
                {errors.password ? <p id="error__message">{errors.password.message}</p> : null}
                
                <button id="button__confirm" type="submit">Entrar</button>
                <h6>Ainda não possui uma conta?</h6>
                <Link to={"/register"} id="button__register">Cadastrar-se</Link>
            </form>
        </DivContainer>
    )
}