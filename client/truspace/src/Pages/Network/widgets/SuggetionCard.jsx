import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
export default function SuggetionCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
       <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 76, height: 76, marginLeft:15,marginTop:5 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{marginLeft:10}}>
         Bruno Brittas
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
      <Button variant="contained">Add Friend</Button>
      </CardActions>
    </Card>
  );
}