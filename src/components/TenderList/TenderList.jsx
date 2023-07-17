import React from 'react'
import "./TenderList.css"
import { faHouse, faGreaterThan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SearchIcon from '@mui/icons-material/Search';

const TenderList = () => {
  return (
    <div>

      <div className="sub_navbar">
        <div className="logo_subscribe">
          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon={faGreaterThan} className="greate_icons" />
          <span className="subs">Tender List</span>
        </div>
      </div>


      <div className='tender-list-top'>
        <div className='tender-main-box'>
          <div className='tleft-bix'>
            <div className='tleft-pdd'>
              <h4>Filter</h4>
              <div className='Tender-documnet'>
                <h5>Tender Documents:</h5>
              </div>
              <hr />
              <div className='Tender-documnet1'>
                <h5>Basic Filter:</h5>
              </div>
              <hr />
              <div className='Tender-documnet1'>
                <h5>Financial Year:</h5>
              </div>
              <hr />
              <div className='Tender-documnet1'>
                <h5>Latest Activity:</h5>
              </div>
              <hr />

              <div className='lbutton'>
                <button>Filter </button>              
              </div>
              
              <div className='lbutton1'>
                <button>Advance Filter</button>              
              </div>
              
            </div>

          </div>



          <div className='tright-box'>
            <div className='firts-head-tender'>
              <h6>Indian Tenders</h6>
            </div>

            {/* <div className='firts-headsec-tender'>
              <div className='boxsec'>
                <input type="text" />
                <button><SearchIcon/></button>
              </div>
              <div className='boxsec'>
               <select name="" id="">
                <option value="#">Active</option>
                <option value="#">Inactive</option>
               </select>
                <button>Reset</button>
              </div>
            </div> */}
            <div className="div_tender-i">
              <div className="div_tender_s">
                <input type="text" name="" id=""  placeholder='Enter Keywords'/>
                <button><SearchIcon className='sear'/></button>
              </div>
              <div className="div_tender_m">
               <select name="" id="">
                <option value="#">Active</option>
                <option value="#">Inactive</option>
               </select>
               <button className='rst-btn'>Reset</button>
              </div>


             
            </div>
          
            <div className='remaing'>
              <div className='rem-imf'> <img src="https://growthgrids.com/static/media/empty-box.1b8e3927aacd0720acb5.png" alt="" />
              <p>No Record Found</p></div>
             
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}

export default TenderList