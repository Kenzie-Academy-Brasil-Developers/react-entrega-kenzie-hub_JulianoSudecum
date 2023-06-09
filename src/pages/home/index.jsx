import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { HeaderHome } from "../../components/HeaderHome"
import { LiTech } from "../../components/LiTech"
import { TechContext } from "../../providers/TechContext"
import { UserContext } from "../../providers/UserContext"
import { api } from "../../services/api"
import { createSchema } from "./createSchema"
import { MainStyled } from "./style"

export const Home = () => {
    const { register, handleSubmit, formState: { errors } } =useForm({
        resolver: zodResolver(createSchema)
    })

    const navigate = useNavigate()
    
    const token = localStorage.getItem("@hub-token")
    const { tech , setTech  } = useContext(TechContext)
    const { user , setUser  } = useContext(UserContext)
   
    if(!token){
        return <Navigate to="/"/>
    }

    useEffect(()=>{
        const token = localStorage.getItem("@hub-token")
        if(token){
            const authHomeVerificate = async () =>{
                try {
                    const resp = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(resp.data)
                    setTech(resp.data.techs)
                } catch (error) {
                    console.log(error)
                }
            }
            authHomeVerificate()
        }
    },[])

    const [ modal, setModal ] = useState(false)
    const openModal = () =>{
        setModal(true)
    }
    const closeModal = () =>{
        setModal(false)
    }

    const createSubmit = (dataCreate) =>{
        async function createTech(){
            try {
                const resp = await api.post("/users/techs",dataCreate,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                toast.success("Tecnologia criada com sucesso", {autoClose:2500, theme:"dark"})
                closeModal()
                setTech([...tech, resp.data])
                
            } catch (error) {
                toast.error("Ocorreu um error ao criar uma tecnologia", {autoClose:2500, theme:"dark"})
            }
        }
        createTech()
    }
    
    return(
        <>
            <HeaderHome/>
            <MainStyled>
                <div id="div__profile">
                    { user ? (
                        <>
                            <h3>Ola, {user.name}</h3>
                            <p>{user.course_module}</p>
                        </>
                    ) : (
                        <></>
                    )
                }
                </div>
                <div id="div__info">
                    <div>
                        <h3>Tecnologias</h3>
                        <button onClick={openModal} id="open__modal">+</button>
                    </div>
                    <ul id="ul__tech">
                        { tech ? (
                            tech.map(item => <LiTech key={item.id} item={item} techList={tech}/>)
                        ) : (
                            <></>
                        )
                        }
                    </ul>
                </div>
                {modal &&(
                <div id="div__container">
                    <div id="overlay"></div>
                    <form onSubmit={handleSubmit(createSubmit)} id="modal__container">
                        <header id="modal__header">
                            <h3>Cadastrar Tecnologia</h3>
                            <button onClick={closeModal} id="modal__close">x</button>
                        </header>
                        <label htmlFor="title">Nome</label>
                        <input name="title" type="text" {...register("title")} />
                        {errors.title ? <p id="error__message">{errors.title.message}</p> : null}
                        <label htmlFor="status">Selecionar status</label>
                        <select name="status" id="" {...register("status")}>
                            <option value=""></option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        {errors.status ? <p id="error__message">{errors.status.message}</p> : null}
                        <button id="create__tech" type="submit">Cadastrar tecnologia</button>
                    </form>
                </div>
            )}
            </MainStyled>
        </>
    )
}