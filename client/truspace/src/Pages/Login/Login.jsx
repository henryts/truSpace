import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"; 
import { LoginUserApi } from "../../api/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export default function SignIn() {
  const navigate = useNavigate()
  const handleSubmit = async(data) => {
    
    const response = await LoginUserApi(data);
    console.log({data});
   console.log({response});
    if (response.success) {
       toast.success(response.message);
      console.log({response});
      localStorage.setItem('token',JSON.stringify(response.accessToken));
      localStorage.setItem('userInfo', JSON.stringify(response.userInfo));
     // dispatch(setCredential(response.userInfo))
      navigate('/home');
    }
       else{
        toast.error("Invalid credentials");
      }
    
  
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form noValidate>
              <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <FormControlLabel
                control={<Checkbox as={Field} name="remember" color="primary" />}
                label="Remember me"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
           <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      </Box>
    </Container>
  );
}
