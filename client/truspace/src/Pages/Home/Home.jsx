


import Navbar from "./widgets/Navbar"
import Rightbar from "./widgets/RightBar";
import LeftBar from "./widgets/LeftBar";
import Feed from "./widgets/Feed";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import {Box,Container,Stack, ThemeProvider} from '@mui/material'
function App() {
 

  return (
    <Box>
    <Navbar/>
    <Box>
      <Stack direction={"row"} spacing={2}>
    <LeftBar />
    <Feed/>
    <Rightbar/>
    </Stack>
    </Box>
   
    </Box>
  )
}

export default App
