import React, { useState } from "react"
import "./Footer.css"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === '') {
            toast.error('Email field is required');
        } else {            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid = emailRegex.test(email);

            if (isValid) {               
                toast.success('successfull');
            } else {
                toast.error('Invalid email address');
              
            }
        }
    };


    return (
        <div>
            <div className="footer_main_box">
                <div className="footer_sec_box">
                    <div className="ch-icon-main min">
                        <div className="ch-icon">
                            <LocalPhoneIcon style={{ fontSize: "25px" }} />
                        </div>

                        <ul className="footeractive">
                            <li className="f-li">call us</li>
                            <li>Have Any Question</li>
                            <li>+91 9773356001 , +91 9773356002</li>
                        </ul>
                    </div>
                    <div className="ch-icon-main">
                        <div className="ch-icon">
                            <EmailIcon style={{ fontSize: "25px" }} />
                        </div>

                        <ul>
                            <li className="f-li vcd">mail us</li>
                            <li>Send your mail at</li>
                            <li>business@growthgrids.com</li>
                        </ul>
                    </div>
                </div>





                {/* ***********third************ */}
                <div className="third-box">
                    <div className="abcd_footer">
                        <h2>About Us</h2>
                        <p>Tender Grids is a revolutionary online platform that provides a comprehensive aggregation of tenders from different sources at one centralized location. Their cutting-edge technology allows businesses to easily access and review tender opportunities across a wide range of industries and sectors, helping them stay ahead of the competition and streamline their bidding process.</p>
                    </div>
                    <div className="footer_sec">
                        <h2>Services</h2>
                        <ul>
                            <li>Indian Tender</li>
                            <li>Subscribe</li>
                            <li>Stat Grid</li>
                        </ul>
                    </div>
                    <div className="footer_sec">
                        <h2>Company</h2>
                        <ul>
                            <li>Contact us</li>
                            <li>Feedback</li>
                            <li>Support</li>
                            <li style={{ textDecoration: "underline" }}>Get Free Trial</li>

                        </ul>
                    </div>
                    <div className="footer_sec">
                        <h2>Privacy</h2>
                        <ul>
                            <li>Information</li>
                            <li>Privacy Policy</li>
                            <li>Disclaimer</li>
                            <li>Terms&Conditions</li>
                        </ul>
                    </div>
                </div>



                {/* **************fourth************ */}
                <div className="f_footer">
                    <div className="f-first">
                        <h4>FOLLOW US ON</h4>
                        <div className="social_three">
                            <span><FacebookIcon style={{ fontSize: "14px" }} /></span>
                            <span><InstagramIcon className="abcd_font" style={{ fontSize: "14px" }} /></span>
                            <span><TwitterIcon className="abcd_font" style={{ fontSize: "14px" }} /></span>
                            <span><LinkedInIcon className="abcd_font" style={{ fontSize: "14px" }} /></span>
                        </div>
                    </div>
                    <div className="first_div_footer">
                        <div>
                            <p>Subscribe to our Newsletter</p> </div>
                        <div className="input_footer">

                            <input type="text" value={email} placeholder="Enter your email..." onChange={handleEmailChange} />
                            <button className="btn-f" onClick={handleSubmit}>Subscribe</button>

                            <ToastContainer />


                        </div>
                    </div>
                </div>



                {/* *************************fourth************** */}
                <div className="laste_footer">
                    <span>© 2020-2021, Growth Grids, All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;