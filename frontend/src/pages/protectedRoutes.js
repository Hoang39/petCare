import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import Error from './error';
import { userInfo } from '../api/userApi';

const useAuth = () => {
    const [user, setUser]= useState(null);
   
    useEffect(()=>{
        (async () => {
            const token = localStorage.getItem('user')
            const res = await userInfo(token); 
            if(res)
                setUser(res);
        })()
    },[])
   
    return localStorage.getItem('user') && user && user.isAdmin
}

const ProtectedRoutes = () => {
    return useAuth() ? <Outlet/> : <Error/>
}

export default ProtectedRoutes;
