
import React from "react"
import "./Tenders.css"
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useNavigate } from "react-router-dom";

const Tenders = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className="tender_first">
                <div className="tender_img">
                    <img src="https://images.pexels.com/photos/4947378/pexels-photo-4947378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
                <div className="form_tender">
                    <h1>Get Tender
                    </h1>
                    <h1>
                        Updates On One Click.</h1>
                    <form  className="tender_fom_logn">
                        <input type="text" placeholder="Enter Keywords e.g. Road Tender" />
                        <input type="text" className="inputabc" placeholder="Sector" />

                        <button className="">Search</button>
                    </form>
                </div>


            </div>



            {/* **********2nd**************** */}
            <div className="t_box">

                <div className="tsec_box">
                    <div className="heading_te">
                        <h1>Why Growth Grids</h1>
                        <div className="heading_t">
                            <p><strong>Time management:</strong>  Tender Time management is a huge benefit of Growth Grids and with data shown in a comprehensive manner you have everything you need in one place. No more time wasted searching through vast data for important info. One can plan resources, prioritize work and know your deadlines.</p>
                        </div>
                        <div className="heading_t">
                            <p><strong>Ultimate accessibility:</strong> Since, Growth Grids is an online, it’s accessible anywhere and everywhere you have access to the Internet. This is important because many business owners and team members travel frequently, be it nationally, internationally, or even between cities. Being able to reach your tool no matter where you are makes it easier to access important files and stay updated.</p>
                        </div>
                        <div className="heading_t">
                            <p><strong>Making data actionable:</strong> :With so much data pouring into your business, it’s easy to become lost. Growth Grids keeps pertinent data organized and it helps you make sense of new data.
                                Growth Grids takes this mountain of information coming in from various sources and sorts it, analyzes it, and makes it actionable.</p>
                        </div>
                        <div className="heading_t">
                            <p><strong>Improved team collaboration:</strong>  Team collaboration is a major benefit of Bid Grid+. The software allows you to connect and communicate with team members from anywhere. This lets you connect with individual team members or full groups. When the team is on the same page, your business is more cohesive and operates more efficiently so that deadlines are met and revenues are increased.</p>
                        </div>
                        <div className="heading_t">
                            <p><strong>View Information at one place:</strong> It stores and presents all the information utilized by the business development team in one single tool. It makes the tasks of the all members very easy by presenting all the information about prospects, ongoing bidding, orderbooks, etc. in a readable and usable form.</p>
                        </div>
                    </div>
                    <div className="image_tender">
                        <img src="https://growthgrids.com/static/media/Artboard%205.d170e46006b9a4e6cfb8.png" alt="" />
                    </div>

                </div>

            </div>

            {/* ******************3rd**************** */}
            <div className="t_box1">
                <div className="tsec_box1">
                    <h1>Explore by Sectors</h1>
                    <p className="apapaa">Get ready to bid on the top Sector with Tender Grid! Our expert team will be there to help you 24/7. With our up-to-date tender information, you can easily find the best tenders to bid on and take your business to the next level. With Tender Grid, you'll never miss a chance to make your mark in the bidding world!</p>

                    <div class="grid-container">
                        <div className="mai_div">
                            <div>
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/sector_images/sector_img_1685446739.png" alt="" />
                                <p className="box_tender_p"
                                >Aircraft Services</p>
                            </div>
                            <div>
                                <img src="	https://api.growthgrids.com/bd_growthgrids/public/sector_images/sector_img_1685446753.png" alt="" />
                                <p className="box_tender_p"
                                >Chemicals</p>
                            </div>
                            <div>
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/sector_images/sector_img_1685446821.png" alt="" />
                                <p className="box_tender_p"
                                >Civil Works Tenders</p>
                            </div>
                            <div>
                                <img src="	https://api.growthgrids.com/bd_growthgrids/public/sector_images/sector_img_1685446844.png" alt="" />
                                <p className="box_tender_p"
                                >Computer Equipment & Accessories Tenders</p>
                            </div>

                        </div>
                        <div className="mai_div">
                            <div>
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/sector_images/sector_img_1685446808.png" alt="" />
                                <p className="box_tender_p"
                                >Consultancy</p>
                            </div>
                            <div>
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/sector_images/sector_img_1685446864.png" alt="" />
                                <p className="box_tender_p"
                                >Food</p>
                            </div>
                            <div>
                                <img src="	https://api.growthgrids.com/bd_growthgrids/public/sector_images/sector_img_1685446889.png" alt="" />
                                <p className="box_tender_p"
                                >Power Plant Construction Tenders</p>
                            </div>
                            <div>
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/sector_images/sector_img_1685446949.png" alt="" />
                                <p className="box_tender_p"
                                >Shipping</p>
                            </div>
                        </div>

                    </div>
                    <div className="tender_button1">
                        <button onClick={()=>navigate("/tenderList")}>More <NorthEastIcon className="ioc" /></button>
                    </div>
                </div>


            </div>
            <div className="t_box2">
                <div className="tsec_box2">
                    <h1>Explore by States</h1>
                    <p className="aapp">Growth Grids is more than just a tender portal and provides comprehensive solutions powered by AI and expert team to help you identify and secure bids with convenience and agility.</p>

                    <div class="grid-container">
                        <div className="mai_div">
                            <div className="abc_img">
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/state_images/state_img_1685445876.png" alt="" />
                                <p className="box_tender_p"
                                >Andhra Pradesh</p>
                            </div>
                            <div className="abc_img">
                                <img src="	https://api.growthgrids.com/bd_growthgrids/public/state_images/state_img_1685445904.jpg" alt="" />
                                <p className="box_tender_p"
                                >Delhi</p>
                            </div>
                            <div className="abc_img">
                                <img src="	https://api.growthgrids.com/bd_growthgrids/public/state_images/state_img_1685445932.png" alt="" />
                                <p className="box_tender_p"
                                >Karnatka</p>
                            </div>
                            <div className="abc_img">
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/state_images/state_img_1685446000.png" alt="" />
                                <p className="box_tender_p"
                                >Maharastra</p>
                            </div>

                        </div>
                        <div className="mai_div">
                            <div className="abc_img">
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/state_images/state_img_1685446013.png" alt="" />
                                <p className="box_tender_p"
                                >Rajasthan</p>
                            </div>
                            <div className="abc_img">
                                <img src="	https://api.growthgrids.com/bd_growthgrids/public/state_images/state_img_1685446031.png" alt="" />
                                <p className="box_tender_p"
                                >Tamil Nadu</p>
                            </div>
                            <div className="abc_img">
                                <img src="	https://api.growthgrids.com/bd_growthgrids/public/state_images/state_img_1685446048.png" alt="" />
                                <p className="box_tender_p"
                                >Uttar Pradesh</p>



                            </div>

                        </div>

                    </div>
                    <div className="tender_button1">
                        <button>More <NorthEastIcon className="ioc" /></button>
                    </div>
                </div>


            </div>
            <div className="t_box1">
                <div className="tsec_box1">
                    <h1>Explore by Authority</h1>
                    <p className="apapaa">Get the most out of your tenders with Tender Grid! Our powerful platform helps you explore tenders and get the best deals for your business. Throughout our website, you can uncover tenders released by a number of organizations to not miss out on any opportunities!</p>

                    <div class="grid-container">
                        <div className="mai_div">
                            <div>
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/client_images/client_img_1685447346.png" alt="" />
                                <p className="box_tender_p"
                                >Bhabha Atomic Reasearch Center</p>
                            </div>
                            <div>
                                <img src="	https://api.growthgrids.com/bd_growthgrids/public/client_images/client_img_1685447394.png" alt="" />
                                <p className="box_tender_p"
                                >Delhi Development Authority</p>
                            </div>
                            <div>
                                <img src="	https://api.growthgrids.com/bd_growthgrids/public/client_images/client_img_1685447428.png" alt="" />
                                <p className="box_tender_p"
                                >Department of Defence Research and Development</p>
                            </div>
                            <div>
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/client_images/client_img_1685447298.png" alt="" />
                                <p className="box_tender_p"
                                >Food Corporation of India</p>
                            </div>

                        </div>
                        <div className="mai_div">
                            <div>
                                <img src="	https://api.growthgrids.com/bd_growthgrids/public/client_images/client_img_1685447412.png" alt="" />
                                <p className="box_tender_p"
                                >indian Air Force</p>
                            </div>
                            <div>
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/client_images/client_img_1685447330.png" alt="" />
                                <p className="box_tender_p"
                                >Ministry of Road Transport and Highways</p>
                            </div>
                            <div>
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/client_images/client_img_1685447367.png" alt="" />
                                <p className="box_tender_p"
                                >Natonal Highways & infrastructure Development Corporation Limited</p>
                            </div>
                            <div>
                                <img src="https://api.growthgrids.com/bd_growthgrids/public/client_images/client_img_1685447271.png" alt="" />
                                <p className="box_tender_p"
                                >National Highways Authority of india</p>
                            </div>
                        </div>

                    </div>
                    <div className="tender_button1">
                        <button>More <NorthEastIcon className="ioc" /></button>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Tenders