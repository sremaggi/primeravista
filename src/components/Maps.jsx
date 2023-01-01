import React from "react";
import GoogleMaps from "simple-react-google-maps"
import {Navigate} from 'react-router-dom'
import { UserAuth } from "../context/AuthContext";


const GoogleMap = ({children}) =>{
    const {user} = UserAuth();
    if(!user){
        return <Navigate to='/'/>
    }
    return children;
}

export default PreviewComment;