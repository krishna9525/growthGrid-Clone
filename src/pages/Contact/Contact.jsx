import React from "react"
import "./Contact.css"
import ModalContact from "../../components/ModalContact/ModalContact"
import { faHouse, faGreaterThan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Contact = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>

            <div className="sub_navbar">
                <div className="logo_subscribe">
                    <FontAwesomeIcon icon={faHouse} />
                    <FontAwesomeIcon icon={faGreaterThan} className="greate_icons" />
                    <span className="subs">Contact</span>
                </div>
            </div>


            {/* **********2nd ************ */}
            <div className="contact_box_sec">
                <div className="flex_div">
                    <div className="firs_box_contact">
                        <span>Contact Us</span>
                        <div className="paragraph_a abd">
                            <p> Questions? Comments? Coffee? Contact us now!</p>
                            <p style={{ marginTop: "30px", textAlign: "justify" }}>
                                Our 15+ years of experience in developing uncountable software platforms gives us the confidence to say that we are counted among the top software development company in India. We at Growth Grids Techno had, have, and will be delivering custom software development services and maintenance for the startups, large enterprises, or an individual.

                            </p>
                        </div>
                        <div className="c_button_fiv">
                            <button className="b_contact" onClick={() => setModalShow(true)}>Talk to a Consultant</button>
                        </div>

                    </div>
                    <div className="second_box_contact">
                        <img src="https://growthgrids.com/static/media/customer-service.cda7606f9a2d29ae3bde.png" alt="abcd" />


                    </div>
                </div>
                <div className="map_div">
                    <div className="para_head">
                        <h3>Contact Info</h3>
                        <p>While our tech geeks can connect with you and answer your questions over the chat, you can also drop at our offices to discuss your business needs over a cup of coffee.</p>

                    </div>
                    <div className="map_box_mai">
                        <div className="map_left_box">
                            <h1>Get in Touch</h1>
                            <p className="paraa">Renowned Software app development company delivering user-engaging applications for multiple industry verticals.</p>
                            <div className="box_span">
                                <span>Call Us</span>
                            </div>

                            <div className="input_box_map">
                                <img  src="https://growthgrids.com/static/media/indian-map.033aa57ceafad2f55cc5.png" alt="" />
                                <p>+91-9773356001</p>

                            </div>
                            <div className="input_box_map2">
                                <img src="https://growthgrids.com/static/media/indian-map.033aa57ceafad2f55cc5.png" alt="" />
                                <p>+91-9773356002</p>

                            </div>
                            <hr className="hr" />
                            <div className="box_span_email">
                                <span >Mail to our sales department</span>
                            </div>
                            <div className="input_box_map">
                                <img  className="imgar"
                                    src="https://growthgrids.com/static/media/gmail.d31e1b912596a65210a513a408220207.svg" alt="" />
                                <p>business@growthgrids.com</p>

                            </div>

                            <hr className="hr" />
                            <div className="box_span_email">
                                <span >Address</span>
                            </div>
                            <div className="input_box_map">
                                <img width="22px" height="22px" className="imgar"
                                    src="https://growthgrids.com/static/media/question-placeholder.7e7888458d68b591ddfa61aa83565704.svg" alt="" />
                                <p>N 79-80 Adinath Nagar , JLN Marg Jaipur-302018, Raj , India</p>

                            </div>

                            <hr className="hrr" />
                        </div>
                        <div className="map_right_box">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56937.56653580978!2d75.76755496375587!3d26.88451328230106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db66a78979dc7%3A0xc04a015cee43e8fc!2sConsulting%20Engineers%20Group%20Ltd.!5e0!3m2!1sen!2sin!4v1688466582120!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                </div>
            </div>

            <ModalContact
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        </>
    )
}
export default Contact