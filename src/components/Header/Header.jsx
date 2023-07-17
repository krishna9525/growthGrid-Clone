import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from "react"
import "./Header.css"


const Header = () => {

    return (
        <div>
            <header>
                <div className="first_header">
                    <div className="social_icons"> 
                    <span>  <a href="https://www.facebook.com/people/Growth-Grids/" target="_blank"  ><FacebookIcon className="spcial"/></a> </span>                   
                    <span>  <a href="https://www.instagram.com/growthgrids/" target="_blank"   > <InstagramIcon  className="spcial"/></a> </span>                   
                    <span>  <a href="https://twitter.com/GridsGrowth" target="_blank"  >  <TwitterIcon  className="spcial"/></a> </span>                   
                    <span>  <a href="https://www.linkedin.com/company/93260427" target="_blank"  > <LinkedInIcon  className="spcial"/></a> </span>                   
                                         
                           
                          
                           
                           
                    </div>

                    <div className="contact_div">
                        <div className="contact_here">
                            <span className="first_span">  <FontAwesomeIcon icon={faPhone} className="fot" />Sales Number :
                                <a href="tel:+919773356001">+91 9773356001</a> </span>
                            <span className="first_span"> <FontAwesomeIcon icon={faPhone} className="fot" /> Support Number:
                                <a href="tel: +91-9773356002">  +91 9773356002</a> </span>
                            <span className="first_span"> <FontAwesomeIcon icon={faEnvelope} className="fot" />
                                Email:
                                <a href="mailto:business@growthgrids.com">business@growthgrids.com</a> </span>
                        </div>


                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header