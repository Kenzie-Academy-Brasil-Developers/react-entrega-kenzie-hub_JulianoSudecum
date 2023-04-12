import { useContext, useEffect, useId, useState } from "react"
import { json, Navigate, useNavigate } from "react-router-dom"
import { HeaderHome } from "../../components/HeaderHome"
import { LiTech } from "../../components/LiTech"
import { AuthContext } from "../../providers/AuthContext"
import { api } from "../../services/api"
import { MainStyled } from "./style"


export const Home = () => {
    const navigate = useNavigate()
    
    const { user } = useContext(AuthContext)

    if(!user){
        return <Navigate to="/"/>
    }
    
    return(
        <>
            <HeaderHome/>
            <MainStyled>
                <div id="div__profile">
                    <h3>Ola, {user.name}</h3>
                    <p>{user.course_module}</p>
                </div>
                <div id="div__info">
                    <div>
                        <h3>Tecnologias</h3>
                        <button id="open__modal">+</button>
                    </div>
                    <ul>
                        {
                            user.techs.map(tech => <LiTech key={tech.id} name={tech.title} level={tech.status}/>)
                        }
                    </ul>
                </div>
            </MainStyled>
            <dialog open>
                <h1>Teste dialog</h1>
                <input type="text" />
            </dialog>
        </>
    )
}