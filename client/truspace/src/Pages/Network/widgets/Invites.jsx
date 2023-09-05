import React from 'react';
import { Typography,Button,Avatar } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

function Invites() {
  return (
    <>
    <div style={{display: 'flex',
    alignItems: 'center'}}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Typography sx={{marginLeft:"10px"}}>Hello</Typography>
          </div>
         <div>
            <Button variant="contained">Accept</Button>
            <Button variant="outlined" sx={{marginLeft:"10px"}}>Ignore</Button>
            </div>
            </>
  )
}

export default Invites
