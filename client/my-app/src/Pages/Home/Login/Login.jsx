import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form, Field } from 'formik';
import { LoginUser } from '../../../api/users';






const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={12} sm={4} md={7} >
          <div>
            <h1>Welcome to truSpace!</h1>
            <p>Connect with friends and the world around you on truSpace.</p>
            <p>Discover new people, create communities, and share your interests.</p>
          </div>
        </Grid>
      {/* <Grid
        item
        xs={12}
        sm={4}
        md={7}
        sx={{
        //   backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundColor: (t) =>
        //     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        
        <h1>Welcome to truSpace!</h1>
        <p>Connect with friends and the world around you on Orkut.</p>
        <p>Discover new people, create communities, and share your interests.</p>
      
        }}
      /> */}
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{
              email: '',
              password: '',
              rememberMe: false,
            }}
            onSubmit={ async(values) => {
             // console.log(values);
              const response = await LoginUser(values);
    if (response.success) {
     // toast.success(response.message);
      //localStorage.setItem('token',JSON.stringify(response.accessToken))
     // localStorage.setItem('userInfo', JSON.stringify(response.userInfo))
     // dispatch(setCredential(response.userInfo))
     console.log("loggged in");
      //navigate('/')
    }
            }}
          >
            {({ handleSubmit }) => (
              <Form
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  mt: 1,
                }}
              >
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                />
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  label="Password"
                  autoComplete="current-password"
                />
                <Field
                  as={Checkbox}
                  type="checkbox"
                  name="rememberMe"
                  color="primary"
                  label="Remember me"
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
          <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/Signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  
);
  
}