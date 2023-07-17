import './ModalSubscribe.css'
import React from "react"
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom"

function ModalSubscribe(props) {
  const navigate = useNavigate();

  return (
    <>
   <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
           
      <div className='modal_header'>
        <h1>Get in Touch</h1>
      </div>
      <div className='modal_paragraph'>
       <p>Login To View The Details!</p>
      </div>
      <div className='modal_button'>
        <button>Continue With Google</button>

      </div>
   <div className='modal_or'>
   <span>or</span>
   </div>
   
   <div className='p_tag_modal'>
    <p>Already Have an account ? <span onClick={()=>navigate('/login')}>Login</span></p> 
    </div>
   
      
      
    </Modal>
    </>
  );
}
export default ModalSubscribe