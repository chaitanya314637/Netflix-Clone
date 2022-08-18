
// import { useRouter } from 'next/router'
// import Router from 'next/router';
import { useEffect, useState } from "react";
// import styles from "../../styles/SignIn.module.css"
// import { Contact_page } from "./Contact_page";
// import {osVersion,osName, browserName, browserVersion} from 'react-device-detect'
// import Contact_page from "./ContactPage/Contact_page";

import * as React from 'react';

// import Button from '@mui/material/Button';
import {EyeIcon, EyeOffIcon} from "@heroicons/react/solid";
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useHistory } from "react-router-dom";

import './styles.css';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#000',
  border: '2px solid #ffdd56',
  boxShadow: 24,
  p: 4,
  color: '#fff'
};
const styleButton = {
   
    bgcolor: '#ffdd56',
    
    boxShadow: 24,
    m: 4,
    color: '#000'
  };
export default function SignIn_page() {
    const [state, setState] = React.useState({
        openSnack: false,
        vertical: 'top',
        horizontal: 'center',
      });
    
    const { vertical, horizontal, openSnack } = state;
    
    const [OTP, setOTP] = useState("");

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const router = useRouter();
    const [username, textInputChange] = useState('');
    // console.log(username);
    const [password, setPassword] = useState('');
    // console.log(password);
    const [passwordShown, setPasswordShown] = useState(false);
    let history = useHistory();

    useEffect(() => {
      const accessToken = localStorage.getItem("EMAIL_ID");
    const phoneToken = localStorage.getItem("MOBILE_NO")
    // if no accessToken was found,then we redirect to "/" page.
    if (!accessToken && !phoneToken) {
      // Router.replace("/SigninPage");
    } else {
      
     if(localStorage.getItem("EMAIL_ID") == "shantanu@rhythmflows.com"){
        //  Router.push("/")
        // alert("Hi")
    }
    }
      
      document
          .getElementById("forminput")
          .addEventListener("keydown", function (event) {
              if (event.code === "Enter" || event.code === "NumpadEnter") {
                  event.preventDefault();
                  document.getElementById("signupbutton").click();
              }
          });
  }, []);
    const togglePasswordVisiblity = () => {
                setPasswordShown(passwordShown ? false : true);
                };
    const handleSnackClose = () => {
                    setState({ ...state, openSnack: false });
                  };

   
    const loginHandle=(newState, username, password) => {
          
            if(localStorage.getItem("EMAIL_ID") ==username){
                
                alert("Correct")
                
    history.push("/");
                
            }else{
                alert("Not correct")
            }
    }
    
       return (

<div className="container-bg bg-black">


<section className=" flex justify-center  items-center h-screen ">
    
    <div className="max-w-sm w-full bg-black bg-opacity-80  rounded  p-10 space-y-12 ">
        <div className="py-1 my-0">
        <a className="inline-flex items-center  mr-2 ml-16 my-2 ">
          <a href="/">
        <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
              alt="Picture of the author"
              width={150}
              height={50}
            className="cursor-pointer"
            /></a>
          </a>
            
            <h2 className="text-3xl w-60 ml-8 font-bold text-white mt-5">SIGN IN </h2>
        </div>
        <form  id="forminput">  
                <div>
              
                <input className="w-60 mt-0  ml-8 p-2 text-sm bg-gray-900  focus:outline-none border border-gray-200 rounded text-white" type="text" placeholder="Email" id="username" name="username" value={username}  onChange={(val) => textInputChange(val.target.value)} />
                <div className="relative flex w-full flex-wrap  ">
                <input className="z-1 w-60 mt-0  mt-3 ml-8 p-2 text-sm bg-gray-900 focus:outline-none border border-gray-200 rounded text-white"  type={passwordShown ? "text" : "password"} placeholder="Password" id="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} />
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-8 pr-3 py-3 mt-2">
    <i onClick={togglePasswordVisiblity}> {passwordShown ? <EyeIcon className="h-5 w-5 text-white mr-2"/> : <EyeOffIcon className="h-5 w-5 text-white mr-2"/> }</i>
  </span>
                </div>
                </div>
               
                <div className="mt-5">   
                
                    <button className="w-60  ml-8 p-2  placeholder-black bg-red-500 font-bold "  type="button" onClick={() =>{loginHandle({
          vertical: 'bottom',
          horizontal: 'center',
        },username, password)}} id="signupbutton" >
                        Sign In
                    </button>

                    <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openSnack}
        onClose={handleSnackClose}
        message="I love snacks"
        key={vertical + horizontal}
      >
          <Alert onClose={handleSnackClose} severity="error" sx={{ width: '100%' }}>
         Username or Password is incorrect or <a href="/"><span className="underline cursor-pointer">Create New Account</span></a>
        </Alert>
      </Snackbar>
                            
                    
                </div>
                    <div className="mt-5 flex items-center justify-between">
                        <div className="flex flex-row items-center">
                            <input type="checkbox" className="focus:ring-blue-500   ml-8 text-sm font-normal text-white text-blue-600 border-gray-300 rounded"/>
                            <label htmlFor="comments" className="ml-1 text-sm font-normal text-gray-500">Remember me</label>
                            <a href="/"><span className="ml-2  font-normal text-gray-500 underline cursor-pointer" >Forgot password?</span></a>
                
                        </div>
                    </div>
                    <div className="mt-5">
                        <a className="ml-8  text-sm font-normal text-gray-500">New to Netflix?<span className="ml-2 underline"><a href="/">Sign Up Now</a></span></a>
                    
                    </div> 
                    <div className="text-sm font-normal ml-8  text-gray-500">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</div>
           </form>  
    </div>
</section>

</div>
);
}