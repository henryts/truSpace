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

export const LoginUser = async (payload) => {
    try {
      const response = await axiosUserInstance.post('/login', payload);
      console.log("response",response);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
