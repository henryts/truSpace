import { axiosUserInstance } from "./axiosInstance";

export const upDateProfilePhoto = async (payload) => {
  try {
   console.log("in update profile photo ")
    const response = await axiosUserInstance.put('/user/updateProfilePhoto', payload);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

