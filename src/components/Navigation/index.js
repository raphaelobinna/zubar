import React from "react";
// import MobileToogle from "../MobileToogle"
// import Toogle from "../Toogle"
// import Seo from "../shared/Seo";
// import {Col, Container, Row} from "react-bootstrap"
// import Navigation from "../shared/Navigaion";
  import { Link } from 'react-router-dom';



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
                   <Link to="/profile" > <img src="asset/img/icons/user.svg" alt="profile icon"/> </Link> 
                    {/*  */}
                </span>
        </div>

        <div className="nav_wrapper">
            <ul>
           <Link to="/home">   <li> 
              <svg width="32" height="32" fill="none"  viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M4 12l12-9.333L28 12v14.667a2.667 2.667 0 01-2.667 2.666H6.667A2.667 2.667 0 014 26.667V12z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 29.333V16h8v13.333" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> <span>  Home</span></li></Link>
           <Link to="/comic">   <li> <svg width="28" height="20"  fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 1H6L1.2 5.8 14 18.6 26.8 5.8 22 1zm-5.28 11.04L14 10.6l-2.72 1.44.48-3.04-2.24-2.24 3.04-.48L14 3.56l1.44 2.88 3.04.48L16.24 9l.48 3.04z"  stroke-width="1.5"/></svg> <span>  Comic</span></li></Link>
         <Link to="/video">    <li> <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.55 8.889H3.449a1.671 1.671 0 00-1.67 1.671v16.213a1.671 1.671 0 001.67 1.672h25.103a1.671 1.671 0 001.67-1.672V10.56a1.671 1.671 0 00-1.67-1.671zm-.106 17.778H3.555v-16h24.889v16zM26.791 2.667a.889.889 0 00-.889-.89H6.348a.889.889 0 00-.889.89v.889h21.333v-.89zM28.551 6.222a.889.889 0 00-.889-.889H4.551a.889.889 0 00-.889.89v.888h24.889v-.889z" fill="#211925"/><path d="M11.395 23.813c.247.16.534.247.827.25.212-.001.42-.047.613-.134l8.685-3.876a1.502 1.502 0 000-2.755l-8.685-3.876a1.51 1.51 0 00-2.124 1.378v7.751a1.512 1.512 0 00.684 1.262zm.56-9.013a.258.258 0 01.125-.222.266.266 0 01.142 0 .24.24 0 01.107 0l8.684 3.867a.258.258 0 01.16.248.25.25 0 01-.16.24L12.33 22.81a.249.249 0 01-.25 0 .276.276 0 01-.124-.222V14.8z" fill="#211925"/></svg>  <span>Video</span></li></Link> 
         <Link to="/music">     <li> <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 25V6l13-3v20M11 13l13-3M7 30c2.21 0 4-2.239 4-5s-1.79-5-4-5-4 2.239-4 5 1.79 5 4 5z" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 28c2.21 0 4-2.239 4-5s-1.79-5-4-5-4 2.239-4 5 1.79 5 4 5z" stroke="#fffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> <span> Music</span></li></Link>
              <li>
                 <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 26.667V13.333M24 26.667V5.333M8 26.667v-5.334" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span>  Rankings</span></li>

                <Link to="/settings">
              <li> 
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 20a4 4 0 100-8 4 4 0 000 8z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M25.866 20a2.201 2.201 0 00.44 2.427l.08.08a2.665 2.665 0 010 3.773 2.664 2.664 0 01-3.773 0l-.08-.08a2.2 2.2 0 00-2.427-.44 2.201 2.201 0 00-1.333 2.013V28a2.666 2.666 0 11-5.333 0v-.12A2.2 2.2 0 0012 25.867a2.2 2.2 0 00-2.427.44l-.08.08a2.667 2.667 0 11-3.773-3.774l.08-.08a2.2 2.2 0 00.44-2.426 2.2 2.2 0 00-2.014-1.334H4a2.667 2.667 0 110-5.333h.12A2.2 2.2 0 006.133 12a2.2 2.2 0 00-.44-2.427l-.08-.08A2.667 2.667 0 017.5 4.938a2.667 2.667 0 011.886.782l.08.08a2.2 2.2 0 002.427.44H12a2.2 2.2 0 001.333-2.013V4a2.667 2.667 0 015.333 0v.12A2.2 2.2 0 0020 6.133a2.2 2.2 0 002.426-.44l.08-.08a2.667 2.667 0 113.774 3.774l-.08.08a2.2 2.2 0 00-.44 2.426V12a2.2 2.2 0 002.013 1.333H28a2.667 2.667 0 110 5.334h-.12A2.2 2.2 0 0025.866 20v0z" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> 
                <span>Setting</span>
                </li>
                </Link>



              
             

            </ul>

            

        </div>
    </React.Fragment>
  );
}


export default Navigation;
