import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { HeaderRegister } from "../../components/HeaderRegister"
import { api } from "../../services/api"
import { formSchema } from "./formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginContainer } from "./style"

export const RegisterPage = () => {

    const { register , handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    })

    const submit = (formData) =>{

        async function registerRequest(){
            try {
                const resp = await api.post("/users", 
                    formData
                )
                toast.success("Usuario criado com sucesso", {autoClose:2500, theme:"dark"})
            } 
            catch (error) {
                toast.error("Ocorreu um erro ao registrar-se", {autoClose:2500, theme:"dark"})
            }
        }
        registerRequest()
    }

    return(
        <LoginContainer>
            <HeaderRegister/>
            <form onSubmit={handleSubmit(submit)}>
                <p id="form__title">Crie sua conta</p>
                <p id="form__desc">Rapido e gratis, vamos nessa</p>
                <label htmlFor="username">Nome</label>
                <input name="username" type="text" placeholder="Digite aqui seu nome" {...register("name")}/>
                {errors.name ? <p id="error__message">{errors.name.message}</p> : null}

                <label htmlFor="email">Email</label>
                <input name="email" type="text" placeholder="Digite aqui seu email" {...register("email")} />
                {errors.email ? <p id="error__message">{errors.email.message}</p> : null}

                <label htmlFor="password">Senha</label>
                <input type="password" placeholder="Digite aqui sua senha" {...register("password")} />
                {errors.password ? <p id="error__message">{errors.password.message}</p> : null}

                <label htmlFor="password_confirm">Confirmar senha</label>
                <input type="password" placeholder="Digite novamente sua senha"/>

                <label htmlFor="bio">Bio</label>
                <input name="bio" type="text" placeholder="Fale sobre você" {...register("bio")} />
                {errors.bio ? <p id="error__message">{errors.bio.message}</p> : null}

                <label htmlFor="contact">Contato</label>
                <input name="contact" type="text" placeholder="Opção de contato" {...register("contact")} />
                {errors.contact ? <p id="error__message">{errors.contact.message}</p> : null}

                <label htmlFor="module">Selecionar modulo</label>
                <select {...register("course_module")} name="module" id="">
                    <option value=""></option>
                    <option value="Primeiro Modulo">Primeiro Modulo</option>
                    <option value="Segundo Modulo">Segundo Modulo</option>
                    <option value="Terceiro Modulo">Terceiro Modulo</option>
                    <option value="Quarto Modulo">Quarto Modulo</option>
                    <option value="Quinto Modulo">Quinto Modulo</option>
                    <option value="Sexto Modulo">Sexto Modulo</option>
                </select>
                {errors.course_module ? <p id="error__message">{errors.course_module.message}</p> : null}

                <button id="button__confirm" type="submit">Cadastrar</button>
            </form>
        </LoginContainer>
    )
}