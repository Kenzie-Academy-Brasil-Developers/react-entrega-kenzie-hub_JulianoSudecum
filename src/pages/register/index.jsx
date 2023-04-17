import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { HeaderRegister } from "../../components/HeaderRegister"
import { api } from "../../services/api"
import { formSchema } from "./formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginContainer } from "./style"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const RegisterPage = () => {
    const navigate = useNavigate()
    const { register , handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    })

    const { registerRequest } = useContext(UserContext)

    const submit = (formData) =>{
        registerRequest(formData)
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
                <input type="password" placeholder="Digite novamente sua senha" {...register("confirm")}/>
                {errors.confirm ? <p id="error__message">{errors.confirm.message}</p> : null}

                <label htmlFor="bio">Bio</label>
                <input name="bio" type="text" placeholder="Fale sobre você" {...register("bio")} />
                {errors.bio ? <p id="error__message">{errors.bio.message}</p> : null}

                <label htmlFor="contact">Contato</label>
                <input name="contact" type="text" placeholder="Opção de contato" {...register("contact")} />
                {errors.contact ? <p id="error__message">{errors.contact.message}</p> : null}

                <label htmlFor="course_module">Selecionar modulo</label>
                <select {...register("course_module")} name="course_module">
                    <option value="">Escolha uma opção</option>
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