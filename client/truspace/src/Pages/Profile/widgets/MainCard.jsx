import * as React from 'react';
import { useState,useEffect,use } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { IconButton } from '@mui/material';
import { updateCoverPhoto } from '../../../api/usersApi';
import { getUserDataApi } from '../../../api/usersApi';
import { updateCoverPhotoInState } from '../../../redux/Features/authSlice';
import {Avatar} from '@mui/material';

export default  function MainCard(userData) {
  //  console.log(userData,"asda");

      
  const userdet = useSelector((state) => state.auth.userdet);
  console.log(userdet.coverPhoto);
  const dispatch = useDispatch();
    const [newImage, setNewImage] = useState(userdet.coverPhoto);
   
    const handleImageUpload = async(e) => {
        const file = e.target.files[0]; // Get the selected file

        if (file) {
          const imageUrl = URL.createObjectURL(file); // Create a URL for the selected 
          dispatch(updateCoverPhotoInState(imageUrl));
          setNewImage(imageUrl); // Set the selected image in state
          const formData = new FormData();
          formData.append("coverPhoto",file);
          formData.append("userId",userData?.userData?._id);
          const response = await updateCoverPhoto(formData);
          console.log({response});
        }
    
       };
 
    let imageUrl = " "
   console.log({imageUrl});
  return (
    <Card sx={{ maxWidth: 1100,height:450,marginLeft:15,marginTop:3 }}>
       <div>
      <div style={{ position: 'relative' }}>
        <CardMedia
          component="img"
          alt="Cover Image"
          height="250"
          style={{ objectFit: 'cover', height: '250px' }}
          image={newImage  }
        />
         <Avatar
  style={{
    position: 'absolute',
    bottom: '-28px',
    left: '20px',
    height: '120px',
    width: '120px',
    borderRadius: '60px',
    backgroundColor: '#0073B1',
    color: '#fff',
    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.8)', // Add this line for the white border
  }}
  alt='Remy Sharp'
  src={userdet?.profilePhoto}
/>
        <IconButton
          style={{ position: 'absolute', bottom: '8px', right: '8px',borderRadius:"30px", backgroundColor: '#0073B1', color: '#fff' }}
          onClick={handleImageUpload}
          component="label"
          htmlFor="image-upload-input"
        >
          <PhotoCameraIcon />

        </IconButton>
        {/* Hidden file input for selecting a new image */}
        <input
          type="file"
          id="image-upload-input"
          accept="image/*"
          onChange={(e) => handleImageUpload(e)}
          style={{ display: 'none' }}
        />
       
      </div>
    </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" marginTop={3}>
          Henry Cavil
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}