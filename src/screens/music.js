import React from "react";
import Usercard from "../components/Usercard";
import Navigation from "../components/Navigation";
import MusicCard from "../components/MusicCard";
import MobileToogle from "../components/MobileToogle"








function Music(){

    return(
        <React.Fragment>
            <Navigation/>

            <div className="display_wrapper">

                    <Usercard/><br/>
                    <MusicCard/>
        <MobileToogle/>

              


            </div>

        </React.Fragment>
    )


     
}

export default Music;