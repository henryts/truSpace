import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../../Home/widgets/Post';
import { Box } from '@mui/material';
import { feedApi } from '../../../api/postApi';
import { addPost } from '../../../redux/Features/feedSlice';


function Feed(userInfo) {

 console.log(userInfo.userInfo?._id,"user");
  const dispatch = useDispatch();
  let feeds = useSelector((state) => state.feed);
  console.log(feeds[0]._id,"feed");

  return (
   
   
    <Box flex={2} p={2} marginLeft={10} sx={{ marginLeft: '40px' }}>

    
 {feeds.map((feed) => (
  feed?.userId===userInfo.userInfo?._id ? <Post key={feed._id} feed={feed} userInfo={userInfo}/> : null
))}
   


    </Box>

  )
}

export default Feed;

