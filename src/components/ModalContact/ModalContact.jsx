import React from "react"
import "./ModalContact.css"
import Modal from 'react-bootstrap/Modal';



const ModalContact = (props) => {

    return (
        <>
        <Modal
                    size="lg"
                    aria-labelledby="example-modal-sizes-title-lg"
                    {...props}
                    
                >
                    <div className="m_head" >
                        <h3>Talk to a Consultant</h3>
                        <p>Fill the form below to talk to a consultant!</p>
                    </div>
                    <div className="form-padding">
                        <form className="f-mod">
                            <label>Full Name <sup>*</sup>
                            </label>
                            <br />
                            <input type="text" className="imp" />


                            <div className="f-nd-div">
                                <div className="mobile-f">
                                    <label>Mobile No <sup>*</sup></label>
                                    <br />
                                    <input type="text" className="imp" />
                                </div>
                                <div className="mobile-f">
                                    <label>Email ID <sup>*</sup></label>
                                    <br />
                                    <input type="text" className="imp" />
                                </div>

                            </div>
                            <div className="mobile-f abc">
                                <label>Sector<sup>*</sup></label>
                                <br />
                                <input type="text" className="imp" />
                            </div>
                            <div className="msg">
                                <label htmlFor="textarea">Massage <sup>*</sup></label>
                                <br />
                                <textarea name="" id="" className="textar" rows=""></textarea>
                            </div>




                        </form>
                        <div className="btn-m">
                            <button onClick={() => props?.onHide()} className="btn-mo bt">Close</button>
                            <button onClick={() => props?.onHide()} className="btn-mo but">Submit</button>
                        </div>
                    </div>

                </Modal>
         
        </>
    );
}


export default ModalContact;