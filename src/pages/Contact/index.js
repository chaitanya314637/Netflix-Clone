// import styles from "../../styles/SignIn.module.css"
import { useState, forwardRef, useEffect, useRef} from "react"
// import api from "../api/api"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// import Link from "next/link";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha"
import React, {Component} from 'react'
import Header from "../../components/Header";

import './styles.css';
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Contact_page() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");
    const [submit, setsubmit] = useState(false);
    const [recaptchaverified, setrecaptchaverified] = useState(false);
    const [state, setState] = useState({
      open: false,
      vertical: 'top',
      horizontal: 'center',
      message : "",
      color: "",
    });
  
    const { vertical, horizontal, open } = state;

    const form = useRef();

    useEffect(() => {
      const username = localStorage.getItem('USERNAME');
      if(username){
        setname(localStorage.getItem('USERNAME'))
        setemail(localStorage.getItem('EMAIL_ID'))
        setphone(localStorage.getItem('MOBILE_NO'))
      }
      
    },[])
    
  
  
    const handleClose = () => {
      setState({ ...state, open: false });
    };

    const validateEmail = (email) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    const register = (newState) => {
       
    }
    // console.log(message)

    // const form = useRef();

    const sendEmail = (e) => {
       e.preventDefault();
      // setsubmit(true);
      if(name.length <= 0 || email.length <= 0 || phone.length<=0 || subject.length<=0 || message.length <= 0 ){
          alert("Please fill all the fields")
        //   setState({
        //     ...state,
        //     open:true,
        //     // ...newState,
        //     message:"Please fill all the fields",
        //     color:"error",
        // })
      }
      else if(validateEmail(email) == false){
        alert("Email-id is wrong")
        // setState({
        //     ...state,
        //     open:true,
        //     // ...newState,
        //     message:"Email-id is wrong",
        //     color:"error",
        // })
    }else if(!recaptchaverified){
    //   setState({
    //     ...state,
    //     open:true,
    //     // ...newState,
    //     message:"Please verify recaptcha",
    //     color:"error",
    // })
    alert("Please verify recaptcha")
    }
      else{

        // e.preventDefault();
  
        emailjs.sendForm('service_uvenhjj', 'template_h06k1ru', form.current, 'kr5nX77gdlrOF7sQX')
          .then((result) => {
              // console.log(result.text);
          }, (error) => {
              console.log(error);
          });
          const registerFormData = {
              name: name,
              mobile_no: phone,
              email_id: email,
              subject: subject,
              message: message,
              is_deleted: "N",
              is_active: "Y",
             
          
              sub_application_id: "",
              application_id: "ADEKH"
          };
          setsubject("")
          setmessage("")
          alert("Email sent")
         
      }
      
    };

    function onChange(value) {
      // console.log('Captcha value:', value);
      setrecaptchaverified(true)
    }
    return (
       
<section className={"text-white body-font  container-bg"}>
<Header black={true}/>


  <div className="container px-5 lg:px-60 py-20 mx-auto flex flex-wrap items-center">
    
    <div className="lg:w-full  bg-black bg-opacity-70 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 ">
      <h2 className="text-white text-lg font-medium title-font mb-5">Contact us</h2>
     
      <form ref={form} onSubmit={sendEmail} method="POST">
      <div className="relative mb-4  ">
        <label htmlFor="full-name" className="leading-7 text-sm text-white">Full Name</label>
        <input type="text" id="full-name" name="from_name" className="w-full bg-w hite rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name}  onChange={(val) => setname(val.target.value)}/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
        <input type="email" name="from_email" id="email"  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email}  onChange={(val) => setemail(val.target.value)}/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white">Phone</label>
        <input type="number" id="phone" name="from_mobile" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={phone}  onChange={(val) => setphone(val.target.value)}/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white">Subject</label>
        <input type="text" id="subject" name="user_subject" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={subject}  onChange={(val) => setsubject(val.target.value)}/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
        <textarea rows="4" type="text" id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={message}  onChange={(val) => setmessage(val.target.value)}/>
      </div>

      <ReCAPTCHA
        sitekey="6LdPXn4fAAAAAN2T7DxHn6UQghKitXGR-maiQ41B"
        onChange={onChange}
        theme="dark"
      />
      <input type="submit" className="text-white  w-full bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-5"  
      
      // onClick={() => register({
      //     vertical: 'bottom',
      //     horizontal: 'center',
      //   })} 
        value="Send"/>
         <label htmlFor="comments" className=" text-xs font-normal text-white justify-center"> This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot</label>

        </form>


      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        
        key={vertical + horizontal}
    >
        <Alert onClose={handleClose} severity={state.color} sx={{ width: '100%' }}>
            {state.message}
            </Alert>
    </Snackbar>
    </div>
  </div>
</section>
       
    )
}
