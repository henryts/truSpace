import { configureStore } from "@reduxjs/toolkit";
import authStore from "./Features/authSlice";
import feedReducer from "./Features/feedSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    // Handle potential errors while saving
  }
};
const persistedState = loadState();

const store = configureStore({
  reducer: {
    auth: authStore,
    feed: feedReducer,
    
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
