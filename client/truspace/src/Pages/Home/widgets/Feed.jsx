import React from 'react';
import Post from './Post';
import { Box } from '@mui/material';

function Feed() {
  return (
  
    <Box flex={2} p={2} marginLeft={10} sx={{marginLeft:"80px"}}>
    <Post/>
    <Post/>
    <Post/>
    </Box>
  )
}

export default Feed
