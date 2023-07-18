
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SignupUser } from '../../api/users'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Box
  } from "@material-tailwind/react";

  import {  useNavigate } from "react-router-dom";
export default function Signup() {
    const initialValues = {
      name: '',
      email: '',
      password: ''
    };
  
    const validationSchema = Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
      mobile: Yup.number().required('Mobile number required'),
      confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
    });
  
    const navigate=useNavigate()
  const handleSubmit = async (values) => {
    console.log(values);
    const response = await SignupUser(values);
    if (response.success) {
      navigate('/login');
  };
}

    return (
    
      <div className="flex justify-center items-center h-screen">
       <div>
      <Card color="transparent" shadow={false}>
        <div>
        <Typography variant="h4" color="blue-gray">
        truSpace-Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Fillout the form
        </Typography>
        </div>
        <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div className="mb-4">
      <div className="relative">
      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Name
        </label>
        </div>
        <Field
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="mt-1 px-4 py-2  w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <ErrorMessage name="name" component="div" className="text-red-500" />
      </div>
      <div className="relative">
        <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        </div>
        <Field
          type="email"
          id="email"
          name="email"
          placeholder="Enter the email"
          className="mt-1 px-4 py-2  w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <ErrorMessage name="email" component="div" className="text-red-500" />
      </div>
      <div className="relative">
        <div>
        <label htmlFor="Mobile" className="text-sm font-medium text-gray-700">
          Mobile Number
        </label>
        </div>  
        <Field
          type="Number"
          id="mobile"
          name="mobile"
          className="mt-1 px-4 py-2  w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <ErrorMessage name="mobile" component="div" className="text-red-500" />
      </div>
      <div className="relative">
        <div>
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        </div>  
        <Field
          type="password"
          id="password"
          name="password"
          className="mt-1 px-4 py-2  w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <ErrorMessage name="password" component="div" className="text-red-500" />
      </div>
      <div className="relative">
        <div>
        <label htmlFor="confirmpassword" className="text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        </div>  
        <Field
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          className="mt-1 px-4 py-2  w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <ErrorMessage name="confirmpassword" component="div" className="text-red-500" />
      </div>
    </div>
    {/* <Checkbox
      label={
        (
          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-normal"
          >
            I agree the
            <a
              href="#"
              className="font-medium transition-colors hover:text-blue-500"
            >
              &nbsp;Terms and Conditions
            </a>
          </Typography>
        )
      }
      containerProps={{ className: "-ml-2.5" }}
    /> */}
    <Button type="submit" className="mt-6" fullWidth>
      Register
    </Button>
    <Typography color="gray" className="mt-4 text-center font-normal">
      Already have an account?{" "}
      <a
        href="/login"
        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
      >
        Sign In
      </a>
    </Typography>
  </Form>
</Formik>

      </Card>
      </div>
      </div>
    );
  }


  