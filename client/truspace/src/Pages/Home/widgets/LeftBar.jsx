import React , { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box, colors } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import ArchiveIcon from '@mui/icons-material/Archive';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@mui/material/Switch';
import DraftsIcon from '@mui/icons-material/Drafts';
import {Avatar} from '@mui/material';
import { DropzoneDialog } from "material-ui-dropzone";
import { upDateProfilePhoto } from '../../../api/updateProfilePhoto';
import { setCredential } from '../../../redux/Features/authSlice';
const label = { inputProps: { 'aria-label': 'Switch demo' } };



function LeftBar(userInfo ) {
  
  const userIn = useSelector(state => state.auth.userdet); 
 // console.log({userIn});
  const [dropzoneOpen, setDropzoneOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  
   const userDetails=userInfo?.userInfo
  const [currentPic,setCurrentPic] = useState(userDetails?.profilePhoto);
  const dispatch = useDispatch();
  const handleSave =async (files) => {
      setFiles(files);
     setSelectedImage(files[0]);
     const formData = new FormData();
     formData.append("profilePhoto",selectedImage);
     formData.append("userId",userDetails?._id);
     setDropzoneOpen(false);
     const response = await upDateProfilePhoto(formData);
    
     if(response.data)
     {
      console.log(response.data,"response from server");
      setCurrentPic(response?.data?.profilePhoto);
      localStorage.setItem('userdet', JSON.stringify(response.data));
      // dispatch(setCredential(response.data));
     }
    console.log({currentPic});
 
  }

 
  return (
    
    <Box sx={{ width: '100%',
     maxWidth: '250px', 
     bgcolor: 'background.paper',display:{xs:"none", sm:"block"}  }}>
        
      <Box position="fixed" marginLeft={3} marginTop={4}>
      <Box textAlign="center" marginBottom={3}>
          <Avatar onClick={() => setDropzoneOpen(true)}  src={currentPic} sx={{ width: 84, height: 84, margin: '0 auto' }} />
          <Box sx={{  marginTop: '15px',
        fontSize: '1.25rem', // Adjust the font size
        fontWeight: '',
        color: '#000000',
        fontFamily: 'Roboto, sans-serif', // Apply the imported font
        textTransform: 'capitalize', // Customize text transformation if needed
        textAlign: 'center',
        marginLeft:'10px',
        textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.1)',
                    
                      }}>{userDetails?.firstName+" "+userDetails?.lastName}</Box>
        </Box>
        <DropzoneDialog
            open={dropzoneOpen}
            onSave={handleSave}
            acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
            showPreviews={true}
            maxFileSize={5000000}
            onClose={() => setDropzoneOpen(false)}
          />
    <nav aria-label="main mailbox folders">
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#msg">
            <ListItemIcon>
              <EmailIcon/>
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#profile">
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="#saved">
            <ListItemIcon>
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText primary="Saved" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
              <ModeNightIcon/>
              </ListItemIcon>
              <Switch {...label} />
            <ListItemText  />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
    <Divider />
    <nav aria-label="secondary mailbox folders">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
      
    </nav>
    </Box>

  </Box>
  )
                    }
                    
export default LeftBar;
