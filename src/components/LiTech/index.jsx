import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { patchSchema } from "../../pages/home/patchSchema"
import { TechContext } from "../../providers/TechContext"
import { api } from "../../services/api"
import { ModalStyled } from "./modalStyle"
import { TechnologyStyled } from "./style"

export const LiTech = ({item , techList}) => {
    const { register, handleSubmit, formState: { errors } } =useForm({
        resolver: zodResolver(patchSchema)
    })

    const token = localStorage.getItem("@hub-token")
    const { getTechs } = useContext(TechContext)

    const [ modal, setModal ] = useState(false)
    const openModal = () =>{
        setModal(true)
    }
    const closeModal = () =>{
        setModal(false)
    }

    const patchTech = async (data) =>{
        try {
            const resp = await api.put(`/users/techs/${item.id}`,data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tecnologia atualizada com sucesso", {autoClose:2500, theme:"dark"})
            setModal(false)
            
            item = resp.data
            getTechs()
        } catch (error) {
            toast.error("Algo deu errado em atualizar a tecnologia", {autoClose:2500, theme:"dark"})
        }
    }

    const deleteTech = async () => {
        try {
            const resp = await api.delete(`/users/techs/${item.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tecnologia deletada com sucesso", {autoClose:2500, theme:"dark"})
            setModal(false)
            getTechs()
        } catch (error) {
            toast.error("Algo deu errado em deletar a tecnologia", {autoClose:2500, theme:"dark"})
            console.log(error)
        }
    }

    return(
        <>
            <TechnologyStyled id="li__tech" onClick={openModal}>
                <p id="tech__name">{item.title}</p>
                <p id="tech__level">{item.status}</p>
            </TechnologyStyled>

            {modal &&(
                <ModalStyled id="div__container">
                    <div id="overlay"></div>
                    <form onSubmit={handleSubmit(patchTech)} id="modal__container">
                        <header id="modal__header">
                            <h3>Detalhes Tecnologia</h3>
                            <button onClick={closeModal} id="modal__close">x</button>
                        </header>
                        <label htmlFor="title">Nome</label>
                        <input readonly="readonly" value={item.title} name="title" type="text" {...register("title")} />
                        {errors.title ? <p id="error__message">{errors.title.message}</p> : null}
                        <label htmlFor="status">Selecionar status</label>
                        <select name="status" id="" {...register("status")}>
                            <option value=""></option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        {errors.status ? <p id="error__message">{errors.status.message}</p> : null}
                        <div id="div__buttons">
                            <button id="patch__button" type="submit">Salvar Alterações</button>
                            <button id="delete__button" onClick={deleteTech}>Excluir</button>
                        </div>
                    </form>
                </ModalStyled>
            )}
        </>
    )
}