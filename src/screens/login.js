import React, { useState, useEffect } from "react";
import Seo from "../shared/Seo";
// import {Col, Container, Row} from "react-bootstrap"
// import Navigation from "../shared/Navigaion";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/actions/auth";
import { useHistory } from "react-router-dom";



function Login() {
  const dispatch = useDispatch()

  const history = useHistory();
  const auth = useSelector(state => state.persistedStore);

  const [input, setInput] = useState({
    email: "", password: ""
  })

  useEffect(() => {
    // dispatch(storeAddress())
    if (auth && auth.isAuthenticated) {
      history.push("/home");
    }
  });

  return (
    <React.Fragment>
      <Seo page="Login">

        <div className="login_section">
          <div className="img_wrapper">
            <img src="asset/img/icons/Logo.svg" className="logo" alt="logo" />
            <img src="asset/img/undraw_secure_login_pdn41.svg" className="login_img" alt="login" />
          </div>

          <div className="input_wrapper">
            <h1>Get Started</h1>
            <p> Don't have an account <Link to="/signup"> <b>sign-up</b></Link>  </p>
            <button className="g_button"> <img src="asset/img/icons/googlelogo.svg" alt="google icon" /> Sign-up with Google</button>
            <hr />


            <form className="input_section">
              {/* <label> Email</label> <br/> */}
              <input placeholder="Email" value={input.email} onChange={e => setInput({ ...input, email: e.target.value.toLowerCase().split(' ').join('') })} className="Email" />
            </form>

            <form className="input_section">
              {/* <label> Password</label>  */}
              <input placeholder="Password" value={input.password} onChange={e => setInput({ ...input, password: e.target.value.split(' ').join('') })} type="password" />
            </form>

            <input type="checkbox" /> {'    '}
            <label>i agree to Zubar <b> Terms of services and Privacy Policy</b></label>
            <br />
            <button className="login_but" onClick={() => dispatch(loginAction(input))} > Login</button>
          </div>
        </div>

      </Seo>
    </React.Fragment>
  );
}
export default Login;
