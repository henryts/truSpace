import * as React from 'react';
import { useState,useEffect,use } from 'react';

import { useDispatch,useSelector } from 'react-redux';
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
import { updateCoverPhotoInState,updateProfilePhotoInState } from '../../../redux/Features/authSlice';
import {Avatar} from '@mui/material';
import { upDateProfilePhoto } from '../../../api/updateProfilePhoto';
export default  function MainCard(userData) {
  //  console.log(userData,"asda");

      
  const userdet = useSelector((state) => state.auth.userdet);
  const dispatch = useDispatch();
    const [newImage, setNewImage] = useState(userdet.coverPhoto);
    const [newProfileImage, setNewProfileImage] = useState(userdet.profilePhoto);
   
    const handleCoverImageUpload = async(e) => {
        const file = e.target.files[0]; // Get the selected file

        if (file) {
          const imageUrl = URL.createObjectURL(file); // Create a URL for the selected 
          dispatch(updateCoverPhotoInState(imageUrl));
          setNewImage(imageUrl); // Set the selected image in state
          const formData = new FormData();
          formData.append("coverPhoto",file);
          formData.append("userId",userData?.userData?._id);
          const response = await updateCoverPhoto(formData);
          //console.log({response});
        }
    
       };

    const handleProfileImageUpload= async(e) => {
        const file = e.target.files[0]; // Get the selected file

        if (file) {
          const profileImageUrl = URL.createObjectURL(file); // Create a URL for the selected 
          dispatch(updateProfilePhotoInState(profileImageUrl));
          setNewProfileImage(profileImageUrl); // Set the selected image in state
          const formData = new FormData();
          formData.append("profilePhoto",file);
          formData.append("userId",userData?.userData?._id);
          const response = await upDateProfilePhoto(formData);
          //console.log({response});
        }
    
       };
   
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
    height: '150px',
    width: '150px',
    borderRadius: '90px',
    backgroundColor: '#0073B1',
    color: '#fff',
    zIndex: 1,
    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.8)', // Add this line for the white border
  }}
  alt='Remy Sharp'
  src={newProfileImage}
>  </Avatar>
<IconButton
          style={{ position: 'absolute', zIndex: 2, bottom: '-20px', left: '80px',borderRadius:"30px", backgroundColor: '#0073B1', color: '#fff',transform: 'scale(0.8)', // Make the icon smaller
          transition: 'transform 0.2s', }}
          onClick={handleProfileImageUpload}
          component="label"
          htmlFor="image-upload-inputt"
          onMouseEnter={() => {
            // Apply hover effect
            document.querySelector('.camera-icon').style.transform = 'scale(0.9)';
          }}
          onMouseLeave={() => {
            // Remove hover effect
            document.querySelector('.camera-icon').style.transform = 'scale(0.8)';
          }}
          
        >
          <PhotoCameraIcon className="camera-icon"/>

        </IconButton>
        {/* Hidden file input for selecting a new image */}
        <input
          type="file"
          id="image-upload-inputt"
          accept="image/*"
          onChange={(e) => handleProfileImageUpload(e)}
          style={{ display: 'none' }}
          
        />

{/*cover*/ }
        <IconButton
          style={{ position: 'absolute', bottom: '8px', right: '8px',borderRadius:"30px", backgroundColor: '#0073B1', color: '#fff' }}
          onClick={handleCoverImageUpload}
          component="label"
          htmlFor="image-upload-input"
          onMouseEnter={() => {
            // Apply hover effect
            document.querySelector('.camera-iconn').style.transform = 'scale(0.9)';
          }}
          onMouseLeave={() => {
            // Remove hover effect
            document.querySelector('.camera-iconn').style.transform = 'scale(0.8)';
          }}
        >
          <PhotoCameraIcon className="camera-iconn" />

        </IconButton>
        {/* Hidden file input for selecting a new image */}
        <input
          type="file"
          id="image-upload-input"
          accept="image/*"
          onChange={(e) => handleCoverImageUpload(e)}
          style={{ display: 'none' }}
        />
       
      </div>
    </div>
      <CardContent>
        <Typography gutterBottom variant="h5"  sx={{fontFamily:"roboto"}} component="div" marginTop={3}>
          {userdet?.firstName+" "+userdet?.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit Profile</Button>
        <Button size="small">Settings</Button>
      </CardActions>
    </Card>
  );
}