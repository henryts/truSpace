import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)"); 
  
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isNonMobileScreens ? "row" : "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
    <Box
      width={isNonMobileScreens ? "50%" : "100%"}
      height="auto"
      mx={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderRadius={theme.spacing(3)}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
      p={3}
    >
      <img
        src="./logo.jpg"
        alt="Your Alt Text"
        style={{
          width: "20%",
          height: "auto",
          borderRadius: theme.spacing(3),
          marginBottom: theme.spacing(2),
        }}
      />
      <Typography
        fontWeight="bold"
        variant="h5"
        color={theme.palette.primary.main}
        sx={{
          fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        truSpace,
        <br />
        Connect with true ones!
      </Typography>
    </Box>

        <Box
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography
            fontWeight="500"
            variant="h5"
            sx={{
              mb: "1.5rem",
              color: "rgb(204, 0, 108)",
              fontSize: "2.5rem",
            }}
          >
            truSpace Login
          </Typography>
          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
