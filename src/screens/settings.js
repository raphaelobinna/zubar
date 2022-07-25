import React, { useState } from 'react';
import Seo from "../shared/Seo";
// import {Col, Container, Row} from "react-bootstrap"
import Navigation from "../components/Navigation";
import SuperCard from "../components/SuperCard";
import MobileToogle from "../components/MobileToogle"

export default function Settings() {

    const [input, setInput] = useState({
        email: "", full_name: "",
        username: "", content_creator: false
    })

    const [pass, setPass] = useState({
        password: "", confirmPassword: ""
    })

    return (

        <React.Fragment>
            <Seo page="Settings">
                <Navigation />
                <div className="display_wrapper">

                    <h1>Hello</h1>

                    <hr />

                    <form className="input_signup_section">
                        <input value={input.full_name} onChange={e => setInput({ ...input, full_name: e.target.value })} placeholder="Fullname" />
                        <input value={input.username} onChange={e => setInput({ ...input, username: e.target.value })} placeholder="username" />
                    </form>

                    <form className="input_signup_section">
                        <input value={input.email} onChange={e => setInput({ ...input, email: e.target.value.toLowerCase().split(' ').join('') })} placeholder="Email" />
                    </form>

                    <input type="checkbox" value={input.content_creator} onChange={() => setInput({ ...input, content_creator: !input.content_creator })} /> {'    '}
                    <label>Content creator status</label>
                    <br />

                    <button onClick={() => { }} className="login_but">Update </button>
                </div>

                <MobileToogle />


            </Seo>
        </React.Fragment>

    )

}