import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';


export default function Comment({comment}) {
  
    const formattedDate = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
      
        const timeDiffInSeconds = Math.floor((now - date) / 1000); // Calculate the time difference in seconds
      
        if (timeDiffInSeconds < 60) {
          // Less than a minute
          return `${timeDiffInSeconds} seconds `;
        } else if (timeDiffInSeconds < 3600) {
          // Less than an hour
          const minutes = Math.floor(timeDiffInSeconds / 60);
          return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} `;
        } else if (timeDiffInSeconds < 86400) {
          // Less than a day
          const hours = Math.floor(timeDiffInSeconds / 3600);
          return `${hours} ${hours === 1 ? 'hour' : 'hours'} `;
        } else if (timeDiffInSeconds < 604800) {
          // Less than a week
          const days = Math.floor(timeDiffInSeconds / 86400);
          return `${days} ${days === 1 ? 'day' : 'days'} `;
        } else {
          // More than a week
          const weeks = Math.floor(timeDiffInSeconds / 604800);
          return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
        }
      };
  
  console.log("inside cmt compont",comment);
  return (
    <Card sx={{ maxWidth: 800,padding:1, border: "none" ,marginBottom:-3}}>
         <div style={{ display: 'flex' }}>
      <CardHeader
      sx={{ flex: '0.5' ,marginRight:'-40px',marginBottom:"30px"}}
     avatar={
       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={comment?.commentedUserPhoto}>
         R
       </Avatar>
     }
     />

<CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: "15px",flex: '3.5',marginRight:"120px"}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography>{comment?.commentedUserName}</Typography>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ color: 'grey', fontSize: "12px", fontFamily: "roboto" }}>{formattedDate(comment?.createdAt)}</span>
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    </div>
  </div>
  <Typography variant="body2" color="text.secondary">
    {comment?.comment}
  </Typography>
</CardContent>
</div>
      <CardActions disableSpacing sx={{marginLeft:"50px"}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ModeCommentRoundedIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}
