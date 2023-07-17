import React, { useState } from "react";
import "./Signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import fetchData from "../../../Services/Services";


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstChange = (e) => {
    setFname(e.target.value);
  };

  const handleLastChange = (e) => {
    setLname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();



try{
  const formData = {
    Fname:firstname,
    Lname:lastname
,
    
  };





  axios.post("https://api.growthgrids.com/bd_growthgrids/index.php",formData)
}catch(error){
  console.log(error)
}
    



    if (email.trim() === '' || password.trim() === '' || Fname.trim() === '' || Lname.trim() === '') {
      toast.error('Please fill in all fields');
    } else {
      toast.success('Signup successful');
    }
  };

  return (
    <div>
      <div className="signup_first_page">
        <div className="signup_image_left">
          <img src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className="signup_form_right">
          <div className="second_signup_right">
            <div className="signup_form_right_side">
              <img src="https://growthgrids.com/static/media/logo%20gg.d9448364f43b9955f9b4.png" alt="" />
            </div>
            <div className="signup_top">
              <h2 style={{ fontSize: "18px" }}>Sign Up</h2>
            </div>
            <div className="signup_button_page">
              <button> <span>Continue With Google</span> </button>
            </div>
            <div className="signup_or_button">
              <button className="orrr">or</button>
            </div>
            <form action="" className="f_o_rm">
              <div className="signup_fisrts_name">
                <div className="signup_first_name">
                  <label htmlFor="">First Name <sup style={{ color: "red" }}>*</sup></label>
                  <br />
                  <input type="text"  onChange={handleFirstChange} placeholder="Enter First Name" />
                </div>
                <div className="signup_last_name">
                  <label htmlFor="">Last Name <sup style={{ color: "red" }}>*</sup></label>
                  <br />
                  <input type="text" onChange={handleLastChange} placeholder="Enter Last Name" />
                </div>
              </div>
              <div className="signup_email">
                <label htmlFor="" className="email_label">Email <sup style={{ color: "red" }}>*</sup></label>
                <br />
                <input type="text" onChange={handleEmailChange} placeholder="Enter Email" />
              </div>
              <div className="signup_email">
                <label htmlFor="" className="email_label">Password <sup style={{ color: "red" }}>*</sup></label>
                <br />
                <input type="password" placeholder="Enter Password" onChange={handlePasswordChange} />
              </div>
              <div className="signup_button_form">
                <button onClick={handleSubmit}>Sign Up</button>
              </div>
              <ToastContainer />
              <div className="go_to_login">
                <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
