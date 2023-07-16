import { axiosUserInstance } from "./axiosInstance";

export const SignupUser=async(payload)=>{
    try{
        console.log("payload:",payload);
        const response=await axiosUserInstance.post('/signup', payload);
        console.log("response",response);
        return response.data;
    }catch(err){
        return err.message;
    }
}
