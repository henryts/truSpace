import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import authReeducer from "./state";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from 'redux-persist/integration/react';
import persistReducer from 'redux-persist/es/persistReducer';
const persistConfig={key:"root",storage,version:1};
const persistReducer=persistReducer(persistConfig,authReeducer);
const store =  configureStore({
  reducer :persistReducer,
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({
  serializableCheck:{
    ignoredActions:[ FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER]
  }

  }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store ={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
   <ThemeProvider>
      <App />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
