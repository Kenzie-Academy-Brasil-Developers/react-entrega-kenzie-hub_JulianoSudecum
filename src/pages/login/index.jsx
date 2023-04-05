import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { formSchema } from "./formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { DivContainer } from "./style"

export const Login = () => {


    const { register, handleSubmit, formState: { errors }  } = useForm({
        resolver: zodResolver(formSchema)
    })
    const navigate = useNavigate()
 
    const submit = (formData) => {

        async function loginRequest(){
            try {
                const resp = await api.post("/sessions", 
                formData
            )
            localStorage.setItem("@user_id", resp.data.user.id)
            localStorage.setItem("@token", resp.data.token)
            navigate("/home")
            toast.success("Login bem sucedido", {autoClose:2500, theme:"dark"})
            } 
            catch (error) {
                toast.error("Algo deu errado no login", {autoClose:2500, theme:"dark"})
            }
        }
        loginRequest()
    }

    function goToRegister(){
        navigate("/register")
    }



    return(
        <DivContainer>
            <img src="public\Logo.png" alt="" />
            <form onSubmit={handleSubmit(submit)}>
                <h3>Login</h3>
                <label htmlFor="email">Email</label>
                <input onChange={(event) => { setEmail(event.target.value)}} name="email" type="text" placeholder="Digite seu email aqui..." {...register("email")} />
                {errors.email ? <p id="error__message">{errors.email.message}</p> : null}

                <label htmlFor="password">Senha</label>
                <input onChange={(event) => { setPassword(event.target.value)}} name="password" type="password" placeholder="Digite sua senha aqui..." {...register("password")} />
                {errors.password ? <p id="error__message">{errors.password.message}</p> : null}
                
                <button id="button__confirm" type="submit">Entrar</button>
                <h6>Ainda não possui uma conta?</h6>
                <button id="button__register" onClick={goToRegister}>Cadastrar-se</button>
            </form>
        </DivContainer>
    )
}