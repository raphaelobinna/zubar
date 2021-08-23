import React from "react";
// import Seo from "../shared/Seo";
// import {Col, Container, Row} from "react-bootstrap"
// import Navigation from "../shared/Navigaion";
//  import { Link } from 'react-router-dom';


function Navigation() {


  
  return (
    <React.Fragment>
        <div className="nav_bar">
           

                <span><img src="asset/img/icons/Fake Logo.svg" className="left_section"  alt="logo" /> </span>

                <span>
                  <form>
                      <img src="asset/img/icons/search icon.svg" className="searcher" alt="search icon"/>
                    <input placeholder="Search"/>
                  </form>
                    
                </span>
                <span> <img  className="left_section" src="asset/img/icons/mic.svg"  alt="voice icon"/> </span>
   

  
                 <span className="right_section">   
                    <img src="asset/img/icons/Messages Icon.svg" alt="comment icon"/>
                    <img src="asset/img/icons/user.svg" alt="profile icon"/>
                </span>
        </div>

        <div className="nav_wrapper">
            <ul>
              <li> <img src="asset/img/icons/home.svg" alt="home icon"/> <span>  Home</span></li>
              <li> <img src="asset/img/icons/Vector.svg" alt="home icon"/> <span>  Comic</span></li>
              <li>  <img src="asset/img/icons/Video Icon.svg" alt="home icon"/>  <span>Video</span></li>
              <li>  <img src="asset/img/icons/Music Icon.svg" alt="home icon"/> <span> Music</span></li>
              <li> <img src="asset/img/icons/bar-chart.svg" alt="home icon"/> <span>  Rankings</span></li>
              <li>  <img src="asset/img/icons/settings.svg" alt="home icon"/>  <span>Setting</span></li>



              
             

            </ul>
        </div>
    </React.Fragment>
  );
}
export default Navigation;
