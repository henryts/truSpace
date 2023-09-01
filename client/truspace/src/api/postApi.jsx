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
};
export const feedApi = async () => {
  try {
   console.log("in feed api ")
    const response = await axiosUserInstance.get('/posts/feed');
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};
export const likeUnlikeApi = async (postid,userId,isLiked) => {
  try {
   
   console.log("in like api ")
    const response = await axiosUserInstance.patch(`/posts/${postid}/likeUnlike`,{userId,isLiked});
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};
export const addComment = async (postid,userId,comment) => {
  try {
   
   console.log("in comment api ")
    const response = await axiosUserInstance.patch(`/posts/${postid}/addComment`,{userId,comment});
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

