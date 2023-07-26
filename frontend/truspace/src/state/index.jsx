import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    mode:"light",
    user: null,
    token:null,
    post:[],
};
export const authSlice=createSlice ({
  name:"auth",
initialState,
reducers:{
   setMode:(state)=>{
    state.mode=state.mode==="light" ? "dark":"light";
   },
   setLogin:(state,action)=>{
    state.user=action.payload.user;
    state.token=action.payload.token;
   },
   setLogout:(state)=>{
    state.user=null;
    state.token=null;
   },
   setFriends:(state,action)=>{
    if(state.user){
        state.user.friends=action.payload.friends;
    }
    else{
        console.log("user friends non existend :( ");
    }
   },
   setPosts:(state,action)=>{
    state.posts=action.payload.posts;
   },
   setPost:(state,action)=>{
    const updatedposts = state.posts.map((post)=>{
        if(post._id===action.payload.post_id)
        return action.payload.post;
        return post;
    })
    state.post=updatedposts;
   }
}
});
export const {setMode,setFriends,setLogin,setLogout,setPost,setPosts}=authSlice.actions;
export default authSlice.reducer;