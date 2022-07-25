import React, { useState, useEffect } from "react";
import Seo from "../shared/Seo";
// import {Col, Container, Row} from "react-bootstrap"
// import Navigation from "../shared/Navigaion";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../store/actions/auth";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";


function Signup() {
  const dispatch = useDispatch()

  const history = useHistory();
  const auth = useSelector(state => state.persistedStore);

  const [input, setInput] = useState({
    email: "", full_name:"",
    username:"", content_creator:false
  })

  const [pass, setPass] = useState({
    password:"", confirmPassword:""
  })

  useEffect(() => {
    // dispatch(storeAddress())
    if (auth && auth.isAuthenticated) {
      history.push("/home");
    }
  });

 function onSubmit() {
   if(pass.password === pass.confirmPassword) {
      dispatch(registerAction({...input, password:pass.password}))
   } else {
    swal({
      title: "Registration Failed!",
      text: "password and confirm password are not the same",
      icon: "warning",
      dangerMode: true
    });
   }
 }


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
                <input value={input.full_name} onChange={e => setInput({...input, full_name: e.target.value})} placeholder="Fullname"/>
                <input value={input.username} onChange={e => setInput({...input, username: e.target.value})} placeholder="username"/>
            </form>

            <form className="input_signup_section">
                <input value={input.email} onChange={e => setInput({...input, email: e.target.value.toLowerCase().split(' ').join('')})} placeholder="Email"/>
            </form>


            <form className="input_signup_section">
            <input value={pass.password} onChange={e => setPass({...pass, password: e.target.value.split(' ').join('')})} type="password" placeholder="Password"/>
                <input value={pass.confirmPassword} onChange={e => setPass({...pass, confirmPassword: e.target.value.split(' ').join('')})} type="password" placeholder="confirm password"/>
            </form>

            <input type="checkbox" value={input.content_creator} onChange={() => setInput({...input, content_creator: !input.content_creator})}/> {'    '}
                <label>Are you a content creator ?</label>
                <br/>

            <input type="checkbox" /> {'    '}
                <label>i agree to Zubar <b> Terms of services and Privacy Policy</b></label>
                <br/>
                <button onClick={onSubmit} className="login_but"> Sign-Up </button>
        </div>
      </div>

      </Seo>
    </React.Fragment>
  );
}
export default Signup;
