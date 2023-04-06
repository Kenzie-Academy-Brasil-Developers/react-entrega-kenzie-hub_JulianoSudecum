import { useEffect, useId, useState } from "react"
import { json, useNavigate } from "react-router-dom"
import { HeaderHome } from "../../components/HeaderHome"
import { api } from "../../services/api"
import { MainStyled } from "./style"

export const Home = () => {
    const token = localStorage.getItem("@token")
    const userId = localStorage.getItem("@user_id")
    const navigate = useNavigate()
    const [ user , setUser ] = useState({})

    useEffect(() =>{
        if(!token){
            navigate("/register")
        }
        else{
            async function getUser(){
                try {
                    const resp = await api.get(`/users/${userId}`)
                    setUser(resp.data)
                } catch (error) {
                    return error
                }
            }
            getUser()
        }
    }, [])

    return(
        <>
            <HeaderHome/>
            <MainStyled>
                <div id="div__profile">
                    <h3>Ola, {user.name}</h3>
                    <p>{user.course_module}</p>
                </div>
                <div id="div__info">
                    <h3>Que pena! Estamos em desenvolvimento :(</h3>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </MainStyled>
        </>
    )
}