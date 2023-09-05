import React from 'react';
import { Stack } from '@mui/material';
import Navbar from '../Home/widgets/Navbar';
import LeftBar from '../Home/widgets/LeftBar';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Requests from './Requests';
import Grid from '@mui/material/Unstable_Grid2';
import Suggestions from './suggestions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Network() {
    const userInfo = localStorage.getItem('userdet');
     const parsedUserInfo = JSON.parse(userInfo);
  return (
    <div>
     <Navbar  userInfo={parsedUserInfo}/> 
        <Stack direction={"row"} spacing={10} sx={{marginTop:"20px"}}>
    
        
        
        
    
        </Stack>
    <Grid container spacing={2}>
        <Grid xs={3}>
        <LeftBar userInfo={parsedUserInfo} />
        </Grid>
        <Grid xs={8}>
        <Requests />
        </Grid>
        <Grid xs={8} sx={{marginLeft:"380px",marginTop:"50px"}}>
        <Suggestions />
        </Grid>
       
      </Grid>

    
    </div>
  )
}

export default Network
