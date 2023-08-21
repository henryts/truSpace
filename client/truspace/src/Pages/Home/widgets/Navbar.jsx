
import {React, useState } from 'react';
import { AppBar, Badge, Box, InputBase, Toolbar, Typography, styled} from '@mui/material';
//import PetsIcon from '@mui/icons-material/Pets';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
//import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch } from 'react-redux';
import { setlogout } from '../../../redux/Features/authSlice';
import { useNavigate } from 'react-router-dom';



const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
})
const Search = styled("div")(({theme}) => ({
   backgroundColor:"white",
   padding:"0 10px",
  borderRadius:"2px",
   width:"40%"
}))
const Icons = styled("Box")(({theme}) => ({
   
    display:"none",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"

  
} }));
 const UserImage = styled("Box")(({theme}) => ({
   
    display:"flex",
     alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }

  
 }));

function Navbar(userInfo) {
  const dispatch  = useDispatch();
    const [open,setOpen] = useState(false);
    const navigate= useNavigate();
    const handleLogout = () => {
      
      
      dispatch(setlogout());
      localStorage.removeItem('token'); 
      navigate('/');
    }
  return (
    <AppBar position='sticky' >
        <StyledToolbar>
    <MenuIcon  sx={{display:{md:"none",lg:"none",xs:"block",sm:"block"} }}/>
   <Typography variant='h6' sx={{display:{xs:"none" ,sm:"block"}}}>truSpace</Typography>

   <Search><InputBase placeholder='search...'></InputBase></Search>
   {/* <PetsIcon sx = {{display:{xs:"block", sm:"block"}}}/> */}
   <Icons>
   <Badge badgeContent={4} color="error">
  <MailIcon color="white" />
</Badge>
<Badge badgeContent={4} color="error">
<NotificationsIcon />

</Badge>

<Avatar onClick= {()=>setOpen(true)} alt="Remy Sharp" width="30px" height="30px" 
src={userInfo?.userInfo?.profilePhoto}
/>

</Icons>
< UserImage onClick= {()=>setOpen(true)}>
<Typography variant='h8' sx={{display:{xs:"flex" ,sm:"flex"}}}>Cavil Rev</Typography>
<Avatar alt="Remy Sharp" widt="25px" height="25px" src={userInfo?.userInfo?.profilePhoto} />

</UserImage>
   </StyledToolbar>
   <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={()=>handleLogout()} >Logout</MenuItem>
      </Menu>
   
    </AppBar>
  )
}

export default Navbar