import React from "react";
import Seo from "../shared/Seo";
// import {Col, Container, Row} from "react-bootstrap"
// import Navigation from "../shared/Navigaion";
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <React.Fragment>
      <Seo page="Login">
          
      <div className="login_section"> 
        <div className="img_wrapper">
          <img src="asset/img/icons/Logo.svg" className="logo" alt="logo" />
          <img src="asset/img/undraw_authentication_fsn5 1.svg" className="login_img" alt="login"/>
      </div>

        <div className="input_wrapper">
            <h1>Register</h1>
            <p> Already have an account? <Link to="/"> <b>Login</b></Link> </p>
            <button className="g_button"> <img src= "asset/img/icons/googlelogo.svg" alt="google icon"/> Sign-up with Google</button>
            <hr/>


            <form className="input_signup_section">
                <input placeholder="Fullname"/>
                <input placeholder="Other names"/>
            </form>

            <form className="input_signup_section">
                <input placeholder="Phone-number" />
                <input placeholder="Email"/>
            </form>


            <form className="input_signup_section">
            <input type="password" placeholder="Password"/>

                <input type="password" placeholder="confirm password"/>
            </form>

            <input type="checkbox" /> {'    '}
                <label>i agree to Zubar <b> Terms of services and Privacy Policy</b></label>
                <br/>
                <Link to="/home"> <button className="login_but"> Sign-Up </button></Link>
        </div>
      </div>

      </Seo>
    </React.Fragment>
  );
}
export default Signup;
