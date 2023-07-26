import axios from "axios";

export const axiosUserInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`// use axios interceptors
    }
})