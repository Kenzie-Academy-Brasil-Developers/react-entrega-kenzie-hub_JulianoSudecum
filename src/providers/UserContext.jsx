import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { TechContext } from "./TechContext";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const navigate = useNavigate()
    const [ user , setUser ] = useState(null)

    const { tech , setTech } = useContext(TechContext)


    async function loginRequest(formData){
        try {
            const resp = await api.post("/sessions", 
            formData
        )
        navigate("/home")
        toast.success("Login bem sucedido", {autoClose:2500, theme:"dark"})
        const { user:userResp, token } = resp.data
        localStorage.setItem("@hub-token", token)
        setTech(userResp.techs)
        setUser(userResp)
        } 
        catch (error) {
            toast.error("Algo deu errado no login", {autoClose:2500, theme:"dark"})
        }
    }


    return(
        <>
            <UserContext.Provider value={{ loginRequest , user }}>
                {children}
            </UserContext.Provider>
        </>
    )
}