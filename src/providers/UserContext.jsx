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

    async function registerRequest(data){
        try {
            const resp = await api.post("/users", 
                data
            )
            toast.success("Usuario criado com sucesso", {autoClose:2500, theme:"dark"})
            navigate("/")
        } 
        catch (error) {
            toast.error("Ocorreu um erro ao registrar-se", {autoClose:2500, theme:"dark"})
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem("@hub-token")
        if(token){
            const getUserEffect = async () =>{
                try {
                    const resp = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(resp.data)
                    setTech(resp.data.techs)
                    navigate("/home")
                } catch (error) {
                    console.log(error)
                }
            }
            getUserEffect()
        }
    },[])

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
            <UserContext.Provider value={{ loginRequest , user, setUser , registerRequest }}>
                {children}
            </UserContext.Provider>
        </>
    )
}