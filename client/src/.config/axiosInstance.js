import axios from "axios";
import { Import } from "lucide-react";


export const axiosIstance = axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}/api`,
    withCredentials:true
})