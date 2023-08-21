import React, { useState, useEffect } from 'react';
import Post from './Post';
import { Box } from '@mui/material';
import { feedApi } from '../../../api/postApi';

function Feed() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const fetchedFeeds = await feedApi({});
        setFeeds(fetchedFeeds);
        console.log(feeds);
      } catch (error) {
        console.error('Error fetching feeds:', error);
      }
    };

    fetchFeeds();
  }, []);


  return (
    

    <Box flex={2} p={2} marginLeft={10} sx={{ marginLeft: '80px' }}>
      {feeds.map((feed) => (
        <Post key={feed._id} feed={feed} />
      ))}
    </Box>
  )
}

export default Feed
