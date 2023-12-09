import { useContext,createContext, useEffect,useState, useLayoutEffect } from "react";
import { 
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [user,setUser] = useState({});


    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)

    }

    const facebookSignIn = () =>{
        const provider = new FacebookAuthProvider()
        signInWithPopup(auth,provider)

    }

    const logOut = ()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={{googleSignIn,facebookSignIn,logOut,setUser,user}}>
            {children}
        </AuthContext.Provider>
        )

}




export const UserAuth = ()=>{
    return useContext(AuthContext)
}