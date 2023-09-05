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
export default function Requests() {
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
        <Item>Invitations</Item>
        <Item2>
        <Invites/>
        </Item2>
        <Item2>
        <Invites/>
        </Item2>
        <Item2>
        <Invites/>
        </Item2>
        {/* <Item3 sx={{marginTop:"50px"}}><SuggetionCard/></Item3> */}
      </Stack>
     
        </Box>
        
         </>
  );
}