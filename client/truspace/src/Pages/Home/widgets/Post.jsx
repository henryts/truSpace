
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import TextField from '@mui/material/TextField';
import { likeUnlikeApi } from '../../../api/postApi';
import { addComment } from '../../../api/postApi';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post({ feed }) {
  const userInfo = localStorage.getItem('userdet');
  const parsedUserInfo = JSON.parse(userInfo);
  console.log(feed,"feed like from local" );
  const [isLiked, setIsLiked] = useState(feed?.likes[parsedUserInfo?._id]|| false);
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


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
      
       if(!isLiked)
       {
      const response = await likeUnlikeApi(feed?._id,parsedUserInfo?._id,isLiked);
     // console.log(response?.likes[parsedUserInfo?._id]);
       setIsLiked(response?.likes[parsedUserInfo?._id]);
       }
       else{
        setIsLiked(false);
       }
    //  feed?.likes[parsedUserInfo?._id] // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };
  

  //**comments operation**

    const [comment, setComment] = useState('');
  
    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };
    const handleSubmitComment = async () => {
      try {
       
         const response = await addComment(feed?._id,parsedUserInfo?._id,comment);
      console.log("commented!!!",comment);
        // Handle the API response, e.g., show a success message.
       // console.log('Comment posted:', response.data);
  
        // Optionally, clear the TextField after successful submission.
        setComment('');
      } catch (error) {
        // Handle errors, e.g., show an error message.
        console.error('Error posting comment:', error);
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
    
   
    <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CommentIcon  />
        </ExpandMore>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         <Box>{comment}</Box> 
        <TextField id="standard-basic" label="Add a comment" variant="standard"  sx={{width:"100%"}} value={comment}
        onChange={handleCommentChange}/>
        <Button variant="contained" sx={{marginTop:"10px"}} onClick={handleSubmitComment}>Comment</Button>

        </CardContent>
      </Collapse>
  
</Card>
  );
}
