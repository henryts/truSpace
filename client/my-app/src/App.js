import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import SignUp from './Forms/Signup/SignUp'
import Signup from './Pages/Home/Signup/Signup';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
//import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'

 
const App = () =>{
  //const classes = useStyles();
    return (
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>

      <Route path="/Signup" element={<Signup/>}/>



      </Routes>
      
      
      </BrowserRouter>
      
      </>
     
    )
}
export default App;