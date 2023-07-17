import React from 'react';
import loginpic from './pic5.jpg'
import {
  Card,
  Input,
  Checkbox,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
function LoginPage() {
  return (

    <div className="flex h-screen">
  <div className="w-1/2 bg-white-400" >
    {/* Left container content goes here */}
    <div className="flex justify-center items-center h-screen">
    <Card className="w-96" >
      <CardHeader floated={false} className="h-80">
        <img src={loginpic} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          S.Cavil 
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          Recent Login
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
    </div>
  </div>
  <div className="w-1/2 bg-white-200">
  <div className="flex justify-center items-center h-screen ">
  <Card  color="transparent" shadow={false}>
    <Typography variant="h4" color="blue-gray">
      Sign Up
    </Typography>
    <Typography color="gray" className="mt-1 font-normal">
      Enter your details to register.
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-4 flex flex-col gap-6">
        <Input size="lg" label="Name" />
        <Input size="lg" label="Email" />
        <Input type="password" size="lg" label="Password" />
      </div>
      <Checkbox
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
      />
      <Button className="mt-6" fullWidth>
        Register
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{" "}
        <a
          href="#"
          className="font-medium text-blue-500 transition-colors hover:text-blue-700"
        >
          Sign In
        </a>
      </Typography>
    </form>
  </Card>
  </div>
</div>






    
  
 </div>
  );
}

export default LoginPage;
