import React from "react";
import  CardContent from "./CardContent";
import { CardItems} from "./CardItems";
// import Seo from "../shared/Seo";
// import {Col, Container, Row} from "react-bootstrap"
// import Navigation from "../shared/Navigaion";
//  import { Link } from 'react-router-dom';



class SuperCard extends React.Component {
  render() {
    return (
      <React.Fragment>

        
     
     { CardItems.map((e, i) =>{
     return(
        <CardContent key={i} name={e.name} profile={e.profile} username={e.username} time={e.time} baseimage={e.baseimage} story={e.story} />
     );
 }
 )}
     
   
      </React.Fragment>
    );
  }
}
export default SuperCard;
