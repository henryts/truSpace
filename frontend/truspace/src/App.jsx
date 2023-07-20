import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import Profile from 'Pages/Profile/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<Home/>}/>

       <Route path="/Signup" element={<Signup/>}/>
       <Route path="/profile/:userId" element={<Profile/>}/>



      </Routes>
      
      
      </BrowserRouter>
      
      </>
  );
}

export default App;