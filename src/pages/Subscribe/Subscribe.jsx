import { faHouse, faGreaterThan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ModalSubscribe from "../../components/ModalSubscribe/ModalSubscribe"
import "./Subscribe.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import 'react-alice-carousel/lib/alice-carousel.css';




const Subscribe = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>

            {/* ***************First Section************* */}

            <div className="sub_navbar">
                <div className="logo_subscribe">
                    <FontAwesomeIcon icon={faHouse} />
                    <FontAwesomeIcon icon={faGreaterThan} className="greate_icons" />
                    <span className="subs">Subscribe</span>
                </div>
            </div>

            {/* ************Second section ************* */}

            <div className="second-section_sub">
                <div className="section-heading">Browse Plans</div>

                <div className="slider_main_sub">
                    {/* <Slider {...settings}> */}

                    <div className="slide-div">
                        <div className="price-box">
                            <div className="pay_details">
                                <h5>Pay For a sector</h5>
                                <p><strong> 10000</strong><span> / months</span></p>
                            </div>

                        </div>
                        <div className="mai_basic_section">
                            <div className="basic-section">
                                <h5>Basic Details</h5>
                                <p>voluptates excepturi ipsa natus? Doloremque atque, molestias reiciendis aperiam obcaecati eligendi at veritatis animi? Impedit repudiandae nam esse temporibus?</p>
                            </div>
                            <div>
                                <hr className="hr-sec" />
                            </div>

                            <div className="advance-section">
                                <h5>Advance Details</h5>
                                <p>voluptates excepturi ipsa natus? Doloremque atque, molestias reiciendis aperiam obcaecati eligendi at veritatis animi? Impedit repudiandae nam esse temporibus?</p>
                            </div>
                        </div>

                        <div className="btn-section">
                            <button className="pay-btn" onClick={() => setModalShow(true)}>Pay Now</button>
                        </div>
                    </div>
                    <div className="slide-div">
                        <div className="price-box">
                            <div className="pay_details">
                                <h5>Pay For a location</h5>
                                <p><strong> 5000</strong><span> / months</span></p>
                            </div>
                        </div>
                        <div className="mai_basic_section">
                            <div className="basic-section">
                                <h5>Basic Details</h5>
                                <p>voluptates excepturi ipsa natus? Doloremque atque, molestias reiciendis aperiam obcaecati eligendi at veritatis animi? Impedit repudiandae nam esse temporibus?</p>
                            </div>
                            <hr className="hr-sec" />
                            <div className="advance-section">
                                <h5>Advance Details</h5>
                                <p>voluptates excepturi ipsa natus? Doloremque atque, molestias reiciendis aperiam obcaecati eligendi at veritatis animi? Impedit repudiandae nam esse temporibus?</p>
                            </div>
                        </div>
                        <div className="btn-section">
                            <button className="pay-btn">Buy Custom Plan</button>
                        </div>
                    </div>
                    <div className="slide-div">
                        <div className="price-box">
                            <div className="pay_details">
                                <h5>Pay per Tender</h5>
                                <p><strong> 100</strong><span> / months</span></p>
                            </div>
                        </div>
                        <div className="mai_basic_section">
                            <div className="basic-section">
                                <h5>Basic Details</h5>
                                <p>voluptates excepturi ipsa natus? Doloremque atque, molestias reiciendis aperiam obcaecati eligendi at veritatis animi? Impedit repudiandae nam esse temporibus?</p>
                            </div>
                            <hr className="hr-sec" />
                            <div className="advance-section">
                                <h5>Advance Details</h5>
                                <p>voluptates excepturi ipsa natus? Doloremque atque, molestias reiciendis aperiam obcaecati eligendi at veritatis animi? Impedit repudiandae nam esse temporibus?</p>
                            </div>
                        </div>
                        <div className="btn-section">
                            <button className="pay-btn">View Tenders</button>
                        </div>
                    </div>


                   
                </div>

            </div>
            <ModalSubscribe
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}
export default Subscribe