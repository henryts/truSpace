import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './Pages/LoginPage/index';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
// import Profile from 'Pages/Profile/Profile';
import { useMemo } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from './theme';


function App() {
  const mode = useSelector((state)=>state.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<Home/>}/>

       <Route path="/Signup" element={<Signup/>}/>
       {/* <Route path="/profile/:userId" element={<Profile/>}/> */}



      </Routes>
      </ThemeProvider>
      
      </BrowserRouter>
      
      </>
  );
}

export default App;