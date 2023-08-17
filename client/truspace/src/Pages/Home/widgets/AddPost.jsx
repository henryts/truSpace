import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import { DropzoneDialog } from "material-ui-dropzone";
import { newPostApi } from "../../../api/postApi";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddPost = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dropzoneOpen, setDropzoneOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [postText,setPostText]=useState("");
  const [postImg,setPostImg]=useState("");
 
  const handleClose = () => {
    setModalOpen(false);
    setDropzoneOpen(false);
    setSelectedImage(null);
  };

  const handleSave = (files) => {
    setFiles(files);
    setSelectedImage(files[0]);
    setModalOpen(true);
    setDropzoneOpen(false);
 //   console.log();
  
  };
 
  const handleOpen = () => {
    setModalOpen(true);
    setDropzoneOpen(false);
  };
 const handlePostSubmit = async () => {
  
  
  const userInfo = JSON.parse(localStorage.getItem('userdet'));
  const resolvedFiles = await files;

  if (resolvedFiles[0]) {
    const formData = new FormData();
    formData.append('userId', userInfo._id);
    formData.append('description', postText);
    formData.append('picturePath', resolvedFiles[0]);

    try {
      const response = await newPostApi(formData); 
      console.log('Post created successfully:', response.data);
      
    // Close the modal and reset state
    handleClose();
  } catch (error) {
    console.error('Error creating post:', error);
  }
};
}
  return (
    <>
      <Tooltip
        onClick={handleOpen}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={600}
          height={380}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="post-text"
            multiline
            onChange={(e) => setPostText(e.target.value)}
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image
              color="secondary"
              onClick={() => setDropzoneOpen(true)}
            />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          {selectedImage && (
            <Box mt={2}>
              <Typography variant="subtitle1">Selected Image:</Typography>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                style={{ maxWidth: "50%", width:"30px",height:"40px", marginTop: "8px" }}
              />
            </Box>
          )}
          <DropzoneDialog
            open={dropzoneOpen}
            onSave={handleSave}
            acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
            showPreviews={true}
            maxFileSize={5000000}
            onClose={() => setDropzoneOpen(false)}
          />
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={handlePostSubmit}>Post</Button>
           
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
