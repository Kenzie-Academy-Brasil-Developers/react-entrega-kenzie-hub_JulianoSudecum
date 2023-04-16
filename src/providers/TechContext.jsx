import jwtDecode from "jwt-decode";
import { useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";

export const TechContext = createContext({})

export const TechProvider = ({children}) => {

    const [ tech , setTech ] = useState(null)

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
            <TechContext.Provider value={{ tech , setTech , getTechs }}>
                {children}
            </TechContext.Provider>
        </>
    )
}