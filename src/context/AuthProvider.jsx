import { authContext } from "./AuthContext"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../fireBase"
import { useEffect, useState } from "react"
export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const signUp = (email,password)=>{
        createUserWithEmailAndPassword(auth,email, password)
    }
    const login = (email, password)=>{
        signInWithEmailAndPassword(auth,email,password)
    }
    const logout = ()=>signOut(auth)
    useEffect(() => {
      onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
      })
    }, [])
    
    return(
        <authContext.Provider value={{signUp, login, user, logout}}>
            {children}
        </authContext.Provider>
    )
}