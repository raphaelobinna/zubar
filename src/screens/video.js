import React from "react";
import Usercard from "../components/Usercard";
import Navigation from "../components/Navigation";
import VideoCard from "../components/VideoCard";
import MobileToogle from "../components/MobileToogle";








function Video(){

    return(
        <React.Fragment>
            <Navigation/>
           

            <div className="display_wrapper">

                    <Usercard/><br/>
                    <VideoCard/>
                    <MobileToogle/>
              


            </div>

        </React.Fragment>
    )


     
}

export default Video;