import React,{useState} from "react";
import { useFormik } from "formik";
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
import { useNavigate } from "react-router-dom";
import { SignupUserApi } from "../../api/usersApi";



const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("Required").min(2, "Too Short"),
  lastName: Yup.string().required("Required").min(2, "Too Short"),
  userName: Yup.string().required("Required").min(2, "Too Short"),
  mobileNumber: Yup.number().required("Required").positive("Invalid number").integer("Invalid number"),
  email: Yup.string().email("Invalid email").required("Required").max(50, "Too Long"),
  password: Yup.string().required("Required"), //.min(5, "Too Short"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
    
});

export default function SignUp() {
  const navigate = useNavigate();
 
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      mobileNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      profilePhoto: null
    },
    validationSchema: SignUpSchema,
    onSubmit: async (data) => {
      console.log({data});
     const response = await  SignupUserApi(data);
     console.log({response});
     if (response.success) {
          console.log(response);
          localStorage.setItem("mobileNumber", data.mobileNumber);
          navigate("/verify_mobile");
     }
    
    },
  });
 
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField     
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoFocus
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobileNumber"
            label="Mobile Number"
            name="mobileNumber"
            type="number"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
            helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
            
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
