import axios from "axios";
let token =localStorage.getItem('token')
export const axiosUserInstance = axios.create({
    baseURL: 'http://localhost:8001',
    headers: {
        authorization: `Bearer ${token}`
    }
})