import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
 
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage/>}/>

       <Route path="/Signup" element={<Signup/>}/>



      </Routes>
      
      
      </BrowserRouter>
      
      </>
  );
}

export default App;