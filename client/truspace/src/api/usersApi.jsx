import { axiosUserInstance } from "./axiosInstance";

export const LoginUserApi = async (payload) => {
  try {
    console.log("inside login api");
    const response = await axiosUserInstance.post("/auth/login", payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const SignupUserApi=async(payload)=>{
    try{
        const response=await axiosUserInstance.post('/auth/signup', payload);
        return response.data;
    }catch(err){
        return err.message;
    }
}

export const updateCoverPhoto=async(payload)=>{
  try{
      const response=await axiosUserInstance.put('/user/updateCoverPhoto', payload);
      return response.data;
  }catch(err){
      return err.message;
  }
}

export const getUserDataApi=async(payload)=>{
  try{
      const response=await axiosUserInstance.get('/user/getUserData', payload);
      return response.data;
  }catch(err){
      return err.message;
  }
}