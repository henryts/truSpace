import  { useNavigate } from "react-router-dom";
import { Container, Typography, Box, TextField, Button,Link } from "@mui/material";
import { useState,useEffect,useRef} from "react";

import { auth } from "./Firebase/config";

import { getAuth, signInWithPhoneNumber, RecaptchaVerifier   } from "firebase/auth";
//import * as firebase from 'firebase';


const MobileOTPVerificationPage = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [remainingTime, setRemainingTime] = useState(60);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (remainingTime > 0) {
  //     const timer = setTimeout(() => setRemainingTime((prevTime) => prevTime - 1), 1000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [remainingTime]);
 

  useEffect(() => {
    let mobileNumber = localStorage.getItem("mobileNumber");
    sendOtp("+91" + mobileNumber);
  }, []); // Empty dependency array makes this effect run only once, when the component mounts


  const sendOtp = async (mobileNumber) => {
    try {
      auth.useDeviceLanguage();
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
        'size': 'normal',
        'callback': (response) => {

        }
      });
      console.log(mobileNumber);
      let confirmation = await signInWithPhoneNumber(auth, mobileNumber, window.recaptchaVerifier) .then((confirmationResult) => {
     
        console.log({confirmationResult});
        window.confirmationResult = confirmationResult;
        // ...
      });
  
    } catch (err) {
      console.log(err);
    }
  };
  
  
  // let mobileNumber = localStorage.getItem("mobileNumber");
  // sendOtp( '+91'+mobileNumber);
  const handleOTPChange = (index) => (event) => {
    const { value } = event.target;
    setOTP((prevOTP) => {
      const newOTP = [...prevOTP];
      newOTP[index] = value;
      return newOTP;
    });

    // Move focus to the previous or next input based on input length
    if (value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (index < inputRefs.current.length - 1 && value !== "") {
      inputRefs.current[index + 1].focus();
    }
  };
  const verifyOtp = (input) => {
    confirmationResult.confirm(input).then((result) => {
      const user = result.user;
      console.log("otp success");
        navigate("/");
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      console.log("otp failed");
      // ...
    });
  }
  


  const handleResendOTP = () => {
    // TODO: Implement resend OTP functionality here
    console.log("Resend OTP");
     
 

  };

  const handleKeyDown = (index) => (event) => {
    // Handle backspace key to move cursor back
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    // TODO: Implement OTP verification and form submission here
    console.log("Submitted OTP:", otp.join(""));
    verifyOtp( otp.join(""))
    
  };

  return (
    <Container maxWidth="xs">
      <Box mt={10} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Mobile OTP Verification
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Please enter the 6-digit OTP sent to your mobile number
        </Typography>
        <Box display="flex" justifyContent="center" mt={3}>
          {otp.map((digit, index) => (
            <TextField
              key={index}
              inputRef={(ref) => (inputRefs.current[index] = ref)}
              variant="outlined"
              type="text"
              size="small"
              value={digit}
              onChange={handleOTPChange(index)}
              onKeyDown={handleKeyDown(index)}
              inputProps={{
                style: {
                  textAlign: "center",
                  fontSize: "1.5rem",
                  letterSpacing: "1rem",
                  width: "2rem",
                },
                maxLength: 1,
                inputMode: "numeric", // Hide the up and down arrows (spinners)
              }}
            />
          ))}
        </Box>
        <div id="recaptcha"></div>
        <Box mt={3}>
          {remainingTime > 0 ? (
            <Typography variant="subtitle2">
              Resend OTP in {remainingTime} seconds
            </Typography>
          ) : (
            <Link variant="subtitle2" color="primary" onClick={handleResendOTP}>
              Resend OTP
            </Link>
          )}
        </Box>
        <Button variant="contained" color="primary" onClick={handleSubmit} mt={3}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default MobileOTPVerificationPage;
