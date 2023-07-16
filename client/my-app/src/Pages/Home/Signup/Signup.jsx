import * as React from 'react';
import SignUp from '../../../Forms/Signup/SignUp';
import './signup.css';


export default  function Signup()
{
         return(
            <>
             <div className="login-page">
      <div className="left-container">
        <h1>Welcome to truSpace!</h1>
        <p>Connect with friends and the world around you on Orkut.</p>
        <p>Discover new people, create communities, and share your interests.</p>
        {/* <img src='./shane-rounce-DNkoNXQti3c-unsplash.jpg 'alt="truSpace" className="promo-image" /> */}
      </div>
      <div className="right-container">
        <div className="signup-box">
        <SignUp/>
        </div>
      </div>
    </div>
           
            
            </>




         )



}