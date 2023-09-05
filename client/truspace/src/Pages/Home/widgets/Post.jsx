
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Comment from './comment';
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
import SaveSucess from './components/SaveSucess';
import { likeUnlikeApi } from '../../../api/postApi';
import { addComment } from '../../../api/postApi';
import { getComments } from '../../../api/postApi';
import { savePost } from '../../../api/postApi';
import EditPost from './editPost';
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
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null); // State for anchor element
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);//post edit modal state
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleEditClick = () => {
   // handleClose();
  };
  const handleClose = () => {
    
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element to the MoreVertIcon
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };
  const handleSavePost = async()=>{
    const response = await savePost(parsedUserInfo?._id,feed?._id);
    if (response?.userId !== undefined) {
      setOpenSnackbar(true);  
    }
   // console.log(response?.userId);
  // return response?.userId;
  }
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const userInfo = localStorage.getItem('userdet');
  const parsedUserInfo = JSON.parse(userInfo);
 // console.log(feed,"feed like from local" );
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
    const [showButton, setShowButton] = useState(false);
    const handleCommentChange = (e) => {
      setComment(e.target.value);
      setShowButton(comment.length > 0);
    };
    const [visibleComments, setVisibleComments] = useState(2); 

    const showMoreComments = () => {
      setVisibleComments(visibleComments + 2); 
    };
    const [tempComment, settempComment] = useState([]);

    const handleSubmitComment = async (e) => {
      try {
           settempComment(comment);
         const response = await addComment(feed?._id,parsedUserInfo?._id,comment);
      console.log("commented!!!",response);
      getCommentz();
        // Handle the API response, e.g., show a success message.
       // console.log('Comment posted:', response.data);
       setComment(e.target.value);
     
        setComment('');
      } catch (error) {
        
        console.error('Error posting comment:', error);
      }
    };

    //fetch comment
    useEffect(() => {
      // Fetch comments when the component mounts
      getCommentz();
    }, []);
    const [commentz, setCommentz] = useState([]);
   
    const getCommentz = async()=>{
       
      var responseC = await getComments(feed?._id,parsedUserInfo?._id);
      setCommentz(responseC);
      //  console.log(responseC[0]?.comment,"comentsssszz");


    }
   
  return (
    <Card sx={{ width: "100%", maxWidth: 750, margin: "0 auto", marginBottom: 5, marginLeft: 10 }}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500],marginLeft:"50px" }} aria-label="recipe" src={feed?.userProfilePhoto}/>
       
    
    }
    action={
      <IconButton aria-label="settings" onClick={handleMenuClick}>
        <MoreVertIcon  onClick={() => setOpen(true)}/>
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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
       
        <Avatar sx={{ bgcolor: red[500],marginLeft:"10px" }} aria-label="recipe" src={feed?.userProfilePhoto}/>
          <TextField
        id="standard-basic"
        label="Add a comment"
        variant="outlined" // Use "outlined" variant for rounded edges
        fullWidth
        sx={{ borderRadius: 50,width:"80% ",marginLeft:"10px" }} // Adjust the border-radius as needed
        value={comment}
        onChange={handleCommentChange}
        InputLabelProps={{ shrink: true }} // Ensure the label stays above the input
      />
          
          </Box> 
          
       {showButton && (
        <Button
          variant="contained"
          sx={{ marginTop: "10px",width:"10px" ,borderRadius:"20px",marginLeft:"60px"}}
          onClick={handleSubmitComment}
        >
          Post  
        </Button>
      )}
        
         <Box>
         {commentz.slice(0, visibleComments).map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
      {commentz.length > visibleComments && (
        <button onClick={showMoreComments}
        style={{
          background: 'none',
          border: 'none',
          padding: '0',
          textDecoration: 'underline',
          cursor: 'pointer',
          color: 'blue', // You can change the color to match your design
        }}>load More..</button>
      )}
          
          </Box> 
    
        </CardContent>
      </Collapse>
      {/* {openSnackbar?
  <SaveSucess open={openSnackbar} onClose={handleCloseSnackbar} />:null
} */}
      <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          open={open}
          onClose={handleClose}
          anchorEl={anchorEl} // Specify the anchor element
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{ marginTop: "40px" }}
     
      >
        <MenuItem onClick={handleSavePost}>Save Post</MenuItem>
        <MenuItem>Delete</MenuItem>
      
      </Menu> 
     
       <SaveSucess open={openSnackbar} onClose={handleCloseSnackbar} />
      
</Card>

  );
}
