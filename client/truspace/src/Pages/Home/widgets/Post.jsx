
import React , { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { likeUnlikeApi } from '../../../api/postApi';

export default function Post({ feed }) {
  const userInfo = localStorage.getItem('userdet');
  const parsedUserInfo = JSON.parse(userInfo);
  console.log(feed,"feed like from local" );
  const [isLiked, setIsLiked] = useState(feed?.likes[parsedUserInfo?._id]|| false);



  const formattedDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
   // Calculate the time difference in seconds
    const timeDiffInSeconds = (now - date) / 1000;
    if (timeDiffInSeconds < 180) {
      return 'just now';
    }
  
 const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleString(undefined, options);
  };
  const handleLikeUnlike = async () => {
    try {
      console.log({isLiked});
     
      const response = await likeUnlikeApi(feed?._id,parsedUserInfo?._id,isLiked);
     // console.log(response?.likes[parsedUserInfo?._id]);
       setIsLiked(response?.likes[parsedUserInfo?._id]);

    //  feed?.likes[parsedUserInfo?._id] // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <Card sx={{ width: "100%", maxWidth: 750, margin: "0 auto", marginBottom: 5, marginLeft: 10 }}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500],marginLeft:"50px" }} aria-label="recipe">
        {feed?.userProfilePhoto}
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    title={feed?.firstName+" "+feed?.lastName}  // Replace with the actual user's name
    subheader={formattedDate(feed.createdAt)}
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary" sx={{marginLeft:"60px"}}> 
      {feed?.description}
    </Typography>
  </CardContent>
  <CardMedia
    component="img"
    image={feed?.picturePath}
    alt="Paella dish"
    style={{
      height: '400px',    
      width: '600px',    
      objectFit: 'cover',    
      marginLeft: '70px',
    }}
  />
  <CardActions disableSpacing>
  <IconButton onClick={handleLikeUnlike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: "red"}} />
              ) : (
                <FavoriteBorderOutlined  />
              )}
            </IconButton>
    <IconButton aria-label="share" color='red'>
      <ShareIcon />
    </IconButton>
  </CardActions>
</Card>
  );
}
