import React from "react"
import "./StarGrid.css"
import { faHouse, faGreaterThan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const StarGrid=()=>{
    return(
        <>
         <div className="sub_navbar">
                <div className="logo_subscribe">
                    <FontAwesomeIcon icon={faHouse} />
                    <FontAwesomeIcon icon={faGreaterThan} className="greate_icons" />
                    <span className="subs">States</span>
                </div>
            </div>

            {/* *****************2nd******************** */}
            <div className="top-section">

                <div className="middle-section">
                    <span className="ragister">Register Your GST With us To Know Your States</span>

                </div>


            </div>
        </>
    )
}
export default StarGrid