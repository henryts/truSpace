import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from '../Pages/Login/Login';
import Signup from '../Pages/SignUp/Signup';
import Home from '../Pages/Home/Home';
import MobileOTPVerificationPage from '../Pages/SignUp/MobileOTPVerificationPage';

const Routs = () => {
  return (
    <BrowserRouter>
    <Routes>
     
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/"element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/verify_mobile" element={<MobileOTPVerificationPage/>} />
       
      </Routes>
      </BrowserRouter>
  );
};

export default Routs;
