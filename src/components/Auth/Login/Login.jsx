import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import "./Login.css"


const Login = (props) => {
    const location = useLocation()
    const getVal = () => {
        props?.getProp(location)
    }

    useEffect(() => {
        getVal()
    })
    const navigate = useNavigate()


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/i;
    const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;




    const handleEmail = (e) => {
        let email = e.target.value;
        if (email.match(emailRegex)) {
            setEmailErr(false);
        } else {
            setEmailErr(true);
        }
        if (!email) {
            setEmailErr(false);
        }

        setEmail(email);
    };



    const handlePassword = (e) => {
        let password = e.target.value;
        if (password.match(passwordRegex)) {
            setPwdError(false);
        } else {
            setPwdError(true);
        }
        if (!password) {
            setPwdError(false);
        }

        setPassword(password);
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target[0].value;
        if (!email.match(emailRegex)) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
        }

        let password = e.target[1].value;
        if (!password.match(passwordRegex)) {
            setPwdError(true);
        } else {
            setPwdError(false);
        }
        if (email && password) {
            console.log("email:", email, "password:", password);
        }
    };
    return (
        <div>
            <div className="login_first_div">
                <div className="login_img_box">
                    <img src="https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="abcd" />
                </div>
                <div className="login_form">
                    <div className="login_form_second">
                        <div className="form_logo">
                            <img src="https://growthgrids.com/static/media/logo%20gg.d9448364f43b9955f9b4.png" alt="kfkhfkd" />
                        </div>
                        <div className="head_to_login">
                            <h2 style={{ fontSize: "18px" }}>Log in</h2>
                        </div>
                        <div className="google_login" >
                            <button> <FontAwesomeIcon icon={faGoogle} /> <span> Continue With Google</span> </button>

                        </div>
                        <div className="another_option">
                            <button>or</button>
                        </div>
                        <form className="login_form_box" onSubmit={handleSubmit}>
                            <div className="input_form">
                                <input type="email" placeholder="Enter Email" className="email" onChange={handleEmail} />
                                {emailErr && !email.match(emailRegex) ? (
                                    <span className="emai_error">Login email ivalid</span>
                                ) : (
                                    ""
                                )}
                                <br />
                                <br />
                                <input type="password" placeholder="Enter Password" className="password" onChange={handlePassword} />
                                {pwdError && !password.match(passwordRegex) ? (
                                    <span className="emai_error">enter valid password </span>
                                ) : (
                                    ""
                                )}
                                <div className="login_password_forget"><span onClick={() => navigate("/forgetpassword")}>Forget Your Password?</span> </div>
                                <div className="login_button_page">
                                    <button>Login</button>
                                </div>
                            </div>
                        </form>
                        <div className="not_account_signup">
                            <p>Don't Have an Account ? <span onClick={() => navigate("/Signup")}> Signup </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login