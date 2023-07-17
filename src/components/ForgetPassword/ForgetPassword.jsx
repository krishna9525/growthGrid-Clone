import React from "react"
import "./ForgetPassword.css"

const ForgetPassword=()=>{
    return(
        <div>
       <div className="forget_page">
        <div className="forget_page_left">
            <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className="forget_page_right">
<div className="forget_page_right_second">
   
    <form className="form_forget">
    <h2>Forget Password</h2>
        <input type="email" placeholder="Enter Email" required />
       
        <div className="forget_button">
            <button>Submit</button>
        </div>
    </form>
</div>


        </div>

       </div>
        </div>
    )
}
export default ForgetPassword