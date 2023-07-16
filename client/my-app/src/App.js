import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from './Pages/Signup/SignUp'
import Home from './Pages/Home/Home';
//import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'

 
const App = () =>{
  //const classes = useStyles();
    return (
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/Signup" element={<SignUp/>}/>


      </Routes>
      
      
      </BrowserRouter>
      
      </>
     
    )
}
export default App;