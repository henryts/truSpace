import { axiosUserInstance } from "./axiosInstance";

export const SignupUser=async(payload)=>{
    try{
        const response=await axiosUserInstance.post('/signup', payload);
        return response.data;
    }catch(err){
        return err.message;
    }
}