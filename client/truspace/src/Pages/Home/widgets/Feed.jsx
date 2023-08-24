import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './Post';
import { Box } from '@mui/material';
import { feedApi } from '../../../api/postApi';
import { addPost } from '../../../redux/Features/feedSlice';


function Feed(userInfo) {

 //console.log(userInfo);
  const dispatch = useDispatch();
  let feeds = useSelector((state) => state.feed);
  console.log({feeds});
 
  return (
   
   
    <Box flex={2} p={2} marginLeft={10} sx={{ marginLeft: '80px' }}>
    
      {feeds.map((feed) => (
        feed._id ? <Post key={feed._id} feed={feed} userInfo={userInfo}/> : null
      ))}

    </Box>

  )
}

export default Feed;

