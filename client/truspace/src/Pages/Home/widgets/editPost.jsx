import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditPost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Edit Post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
  </Card>
        </Box>
      </Modal>
    </div>
  );
}