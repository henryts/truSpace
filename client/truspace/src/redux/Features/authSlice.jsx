import { createSlice } from "@reduxjs/toolkit";

const storedUserInfo = localStorage.getItem("userdet");
const storedUserToken = localStorage.getItem("token");

const initialState = {
  userdet: storedUserInfo ? JSON.parse(storedUserInfo) : null,
  token: storedUserInfo ? JSON.parse(storedUserToken) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredential: (state, action) => {
      state.userdet = action?.payload?.userdet;

      state.token = action?.payload?.token;
      console.log({action});
    },
    setlogout: (state, action) => {
      state.userdet = null;
      state.token = null;

      console.log(state.userdet, "inslice");
    },
    updateProfilePhotoInState: (state, action) => {
      state.userdet.profilePhoto = action.payload;
  }
}});

export const { setCredential, setlogout, updateProfilePhotoInState } = authSlice.actions;
export default authSlice.reducer;
