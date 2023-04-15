import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) =>{

    const navigate = useNavigate()
    
    // const HomeAuth = () => {
    //     const token = localStorage.getItem("@hub-token")
    //     if(!token){
    //         navigate("/")
    //     }
    // }

    // const LoginAuth = () => {
    //     const token = localStorage.getItem("@hub-token")
    //     if(token){
    //         navigate("/home")
    //     }
    // }
    
    return(
        <>
            <AuthContext.Provider value={{}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}