import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import jwtDecode from "jwt-decode";
import { useContext } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate()
    

    // const HomeAuth = () => {
        
    //     console.log("NOT TOKEN")
    //     const token = localStorage.getItem("@hub-token")
    //     if(token == null){
    //         console.log("NOT TOKEN")
    //         navigate("/")
    //     }
    //     else if(token){

    //     }
        
    // }

    // const LoginAuth = () => {
    //     useEffect(()=>{
    //         console.log("BEFORE IF")
    //         const token = localStorage.getItem("@hub-token")
    //         if(token){
    //             console.log("TOKEN")
    //             navigate("/home")
    //         }
    //         else if(!token){
    //             return
    //         }
    //     },[])
    // }
    
    return(
        <>
            <AuthContext.Provider value={{}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}