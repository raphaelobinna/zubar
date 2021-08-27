import React from "react";
import Seo from "../shared/Seo";
// import {Col, Container, Row} from "react-bootstrap"
import Navigation from "../components/Navigation";
import SuperCard from "../components/SuperCard";
import MobileToogle from "../components/MobileToogle"
// import { Link } from 'react-router-dom';


function Home() {
  return (
    <React.Fragment>
      <Seo page="Home">
        <Navigation/>
        <div className="display_wrapper">
            <SuperCard/>

            <MobileToogle/>
      

 
        </div>
      </Seo>
    </React.Fragment>
  );
}
export default Home;
