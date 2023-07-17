import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div>
            <nav>
                <div className="navbar_first_div">
                    <div className="logo">
                        <img onClick={() => navigate("/")} src="../logo.png" alt="hghgkufd" />

                    </div>
                    <div className="links_page">
                        <ul className="active">
                            <li> <Link to="/" >TENDERS</Link> </li>
                            <li> <Link to="/contact">CONTACT US</Link> </li>
                            <li> <Link to="/subscribe">SUBSCRIBE</Link> </li>
                            <li> <Link to="/stargrid" >STAR GRID

                            </Link>

                            </li>
                            <li > <Link to="/login">LOGIN</Link>
                          

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;