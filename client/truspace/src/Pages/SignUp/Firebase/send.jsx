import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier   } from "firebase/auth";
import { firebaseConfig } from "./config";


// Initialize Firebase with your Firebase config
initializeApp(firebaseConfig);

// Create a global RecaptchaVerifier instance


export const sendSms = (phoneNumber) => {
  const auth = getAuth();
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    console.log({phoneNumber});
  return signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
    .then((confirmationResult) => {
      console.log("SMS sent");
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      // window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      console.error("Error sending SMS:", error);
    });
};
