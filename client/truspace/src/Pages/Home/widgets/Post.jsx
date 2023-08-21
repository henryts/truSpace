import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


export default function Post({ feed }) {
  return (
    <Card sx={{ width: "100%", maxWidth: 550, margin: "0 auto", marginBottom: 5,marginLeft:10 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={feed.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={feed.picturePath}
        alt="Paella dish"
      />
       <CardContent>
        <Typography variant="body2" color="text.secondary">
          {feed.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share" color='red'>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
        </IconButton>
        <IconButton aria-label="share" color='red'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
