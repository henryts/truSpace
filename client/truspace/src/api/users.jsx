import { axiosUserInstance } from "./axiosInstance";

export const LoginUser = async (payload) => {
  try {
    const response = await axiosUserInstance.post("/api/login", payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const SignupUser=async(payload)=>{
    try{
        const response=await axiosUserInstance.post('/api/signup', payload);
        return response.data;
    }catch(err){
        return err.message;
    }
}