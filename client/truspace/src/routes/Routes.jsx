import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";



import Login from '../Pages/Login/Login';
import Signup from '../Pages/SignUp/Signup';
import Home from '../Pages/Home/Home';

const Routez = () => {
  return (
    <BrowserRouter>
    <Routes>
     
        <Route exact path="/" component={Home} />
        <Route exact path="/userlogin" component={Login} />
        <Route exact path="/signup" component={Signup} />
       
   
      </Routes>
      </BrowserRouter>
  );
};

export default Routez;
