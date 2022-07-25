import React from 'react';
import Seo from "../shared/Seo";
// import {Col, Container, Row} from "react-bootstrap"
import Navigation from "../components/Navigation";
import SuperCard from "../components/SuperCard";
import MobileToogle from "../components/MobileToogle"
import UploadComicPage from '../components/ComicCard/UploadComicPage';

export default function UploadComic (){

    return(

        <React.Fragment>
        <Seo page="Upload">
          <Navigation/>
          <div className="display_wrapper">
             <UploadComicPage/>
  
              <MobileToogle/>
   
          </div>
        </Seo>
      </React.Fragment>

    )

}