import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function ProtectedRoute(){
    const isAuthenticate = useAuthStore((state) => state.isAuthenticate);
    if(!isAuthenticate){
        return <Navigate to ="/login" replace />;
    }
    return <Outlet/>;
}