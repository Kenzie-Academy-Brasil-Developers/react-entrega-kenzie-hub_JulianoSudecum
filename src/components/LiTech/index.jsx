import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { patchSchema } from "../../pages/home/patchSchema"
import { AuthContext } from "../../providers/AuthContext"
import { api } from "../../services/api"
import { TechnologyStyled } from "./style"

export const LiTech = ({tech}) => {
    const { register, handleSubmit, formState: { errors } } =useForm({
        resolver: zodResolver(patchSchema)
    })

    const token = localStorage.getItem("@hub-token")
    const { setTech } = useContext(AuthContext)

    const [ modal, setModal ] = useState(false)
    const openModal = () =>{
        setModal(true)
    }
    const closeModal = () =>{
        setModal(false)
    }

    const patchTech = async (data) =>{
        try {
            const resp = await api.put(`/users/techs/${tech.id}`,data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tecnologia atualizada com sucesso", {autoClose:2500, theme:"dark"})
            setModal(false)
            
            tech = resp.data
        } catch (error) {
            toast.error("Algo deu errado em atualizar a tecnologia", {autoClose:2500, theme:"dark"})
        }
    }

    const deleteTech = async () => {
        try {
            const resp = await api.delete(`/users/techs/${tech.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tecnologia deletada com sucesso", {autoClose:2500, theme:"dark"})
            setModal(false)
        } catch (error) {
            toast.error("Algo deu errado em deletar a tecnologia", {autoClose:2500, theme:"dark"})
        }
    }


    return(
        <>
            <TechnologyStyled onClick={openModal}>
                <p id="tech__name">{tech.title}</p>
                <p id="tech__level">{tech.status}</p>
            </TechnologyStyled>

            {modal &&(
                <div id="div__container">
                    <div id="overlay"></div>
                    <form onSubmit={handleSubmit(patchTech)} id="modal__container">
                        <header id="modal__header">
                            <h3>Detalhes Tecnologia</h3>
                            <button onClick={closeModal} id="modal__close">x</button>
                        </header>
                        <label htmlFor="title">Nome</label>
                        <input readonly="readonly" value={tech.title} name="title" type="text" {...register("title")} />
                        {errors.title ? <p id="error__message">{errors.title.message}</p> : null}
                        <label htmlFor="status">Selecionar status</label>
                        <select name="status" id="" {...register("status")}>
                            <option value=""></option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        {errors.status ? <p id="error__message">{errors.status.message}</p> : null}
                        <div>
                            <button type="submit">Salvar Alterações</button>
                            <button type="submit">Excluir</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}