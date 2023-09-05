import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Navigate
} from "react-router-dom";
import Login from '../Pages/Login/Login';
import Signup from '../Pages/SignUp/Signup';
import Home from '../Pages/Home/Home';
import Network from '../Pages/Network/Network';
import MobileOTPVerificationPage from '../Pages/SignUp/MobileOTPVerificationPage';
import { useSelector } from 'react-redux';
import Profile from '../Pages/Profile/Profile';
const Routs = () => {
  const token =useSelector((state)=>state?.auth?.token)
  console.log(token)
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/home" element={token? <Home/>:<Navigate to='/'/>}/>
        {/* <Route exact path="/home" element={<Home/>} /> */}
        <Route exact path="/" element={token?<Navigate to='/home'/>:<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/verify_mobile" element={<MobileOTPVerificationPage/>} />
        <Route exact path="/network" element={<Network/>} />
        <Route exact path="/profile" element={<Profile/>} />
       
       
      </Routes>
      </BrowserRouter>
  );
};

export default Routs;
