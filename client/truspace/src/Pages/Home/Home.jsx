


import Navbar from "./widgets/Navbar"
import Rightbar from "./widgets/RightBar";
import LeftBar from "./widgets/LeftBar";
import Feed from "./widgets/Feed";

import AddPost from "./widgets/AddPost";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import {Box,Container,Stack, ThemeProvider} from '@mui/material'
function App() {
  
   const userInfo = localStorage.getItem('userdet');
   const parsedUserInfo = JSON.parse(userInfo);


  return (
   <>
    <Navbar userInfo={parsedUserInfo} />
    
      <Stack direction={"row"} spacing={-6}>
    <LeftBar userInfo={parsedUserInfo} />
    <Feed userInfo={parsedUserInfo} isOwnProfile={false}/>
    <Rightbar/>
    </Stack>
  
   <AddPost/>
 
    </>
  )
}

export default App
