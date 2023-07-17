import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./ScrollButton.css";

const ScrollButton = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);


    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="scroll_b">           
            {showTopBtn && (
                <FaAngleUp
                    className="scroll_icon scroll_design"
                    onClick={goToTop}
                />
            )}
        </div>
    );
};
export default ScrollButton;