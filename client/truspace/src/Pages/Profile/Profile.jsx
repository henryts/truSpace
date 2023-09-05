import React from 'react';
import Navbar from '../Home/widgets/Navbar';
import MainCard from './widgets/MainCard';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RightBar from './widgets/RightBar';
import Feed from './widgets/Feed';
import { getUserDataApi } from '../../api/usersApi';
const userInfo = localStorage.getItem('userdet');
const parsedUserInfo = JSON.parse(userInfo);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Profile() {
    const userInfo = localStorage.getItem('userdet');
   const parsedUserInfo = JSON.parse(userInfo);
  return (
    <div>
       <Navbar userInfo={parsedUserInfo} />
       <Grid container spacing={2}>
       
       <Grid xs={8}>
       <MainCard userData={parsedUserInfo}/>
        </Grid>
        <Grid xs={4}>
        < RightBar/>
        </Grid>
        <Grid xs={8}>
          <Feed userInfo={parsedUserInfo}/>
        </Grid>
        <Grid xs={4}>
        
        </Grid>
       
       </Grid>
    </div>
  )
}

export default Profile
