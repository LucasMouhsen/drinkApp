import { useContext } from "react";
import { AuthContext } from "../context/AuthProvide";

export function useAuth (){
    return useContext( AuthContext )
}