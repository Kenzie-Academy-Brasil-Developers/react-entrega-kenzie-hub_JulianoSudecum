import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate()
    const [ user , setUser ] = useState(null)
    const [ tech , setTech ] = useState(null)

    useEffect(()=>{
        const loadUser = async () =>{
            const token = localStorage.getItem("@hub-token")
            
            if(!token){
                return
            }

            const { sub } = jwtDecode(token)
            const response = await api.get(`/users/${sub}`)
            setTech(response.data.techs)
            setUser(response.data)
        }
        loadUser()
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
        setUser(userResp)
        } 
        catch (error) {
            toast.error("Algo deu errado no login", {autoClose:2500, theme:"dark"})
        }
    }

    async function getTechs(){
        const token = localStorage.getItem("@hub-token")
        const { sub } = jwtDecode(token)
        try {
            const resp = await api.get(`/users/${sub}`)
            setTech(resp.data.techs)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <AuthContext.Provider value={{loginRequest, user, tech, setTech, getTechs}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}