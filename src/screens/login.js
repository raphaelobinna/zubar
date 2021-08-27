import React from "react";
import Seo from "../shared/Seo";
// import {Col, Container, Row} from "react-bootstrap"
// import Navigation from "../shared/Navigaion";
 import { Link } from 'react-router-dom';
 


function Login() {
  return (
    <React.Fragment>
      <Seo page="Login">
          
      <div className="login_section"> 
        <div className="img_wrapper">
          <img src="asset/img/icons/Logo.svg" className="logo" alt="logo" />
          <img src="asset/img/undraw_secure_login_pdn41.svg" className="login_img" alt="login"/>
      </div>

        <div className="input_wrapper">
            <h1>Get Started</h1>
            <p> Don't have an account <Link to="/signup"> <b>sign-up</b></Link>  </p>
            <button className="g_button"> <img src= "asset/img/icons/googlelogo.svg" alt="google icon"/> Sign-up with Google</button>
            <hr/>


            <form className="input_section">
                {/* <label> Email</label> <br/> */}
                <input placeholder="Email" className="Email"/>
            </form>

            <form className="input_section">
                {/* <label> Password</label>  */}
                <input placeholder="Password" type="password"/>
            </form>

            <input type="checkbox" /> {'    '}
                <label>i agree to Zubar <b> Terms of services and Privacy Policy</b></label>
                <br/>
               <Link to="/home"> <button className="login_but"> Login</button></Link>
        </div>
      </div>

      </Seo>
    </React.Fragment>
  );
}
export default Login;
