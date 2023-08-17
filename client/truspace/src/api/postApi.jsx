import { axiosUserInstance } from "./axiosInstance";

export const newPostApi = async (payload) => {
  try {
   console.log("in new post api ")
    const response = await axiosUserInstance.post('/posts/newPost', payload);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};2

