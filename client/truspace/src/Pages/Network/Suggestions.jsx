import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Invites from './widgets/Invites';
import SuggetionCard from './widgets/SuggetionCard';
import Grid from '@mui/material/Unstable_Grid2';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  borderRadius:"0px",
 
}));
const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height:'60px',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius:"0px",
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'space-between'
   
  }));
  const Item3 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h6,
    padding: theme.spacing(1),
    textAlign: 'center',
    height:"80px",
    color: theme.palette.text.secondary,
    borderRadius:"0px",
    marginTop:"50px"
   
  }));
export default function Suggestions() {
  return (
    <>
    <Box
      sx={{
        width: 1000,
        height: 'auto',
        
        backgroundColor: 'primary.dark',
        
      }}
    >
         <Stack spacing={0.1}>
        <Item>Suggestions from truSpace</Item>
       
      
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <SuggetionCard/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <SuggetionCard/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <SuggetionCard/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <SuggetionCard/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <SuggetionCard/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <SuggetionCard/>
          </Grid>
        </Grid>
      </Stack>
     
        </Box>
        
         </>
  );
}