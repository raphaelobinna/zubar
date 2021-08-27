import React from "react";
import Usercard from "../components/Usercard";
import Navigation from "../components/Navigation";
import ComicCard from "../components/ComicCard";
import MobileToogle from "../components/MobileToogle";








function Comic(){

    return(
        <React.Fragment>

            <Navigation/>

            <div className="display_wrapper">

                    <Usercard/><br/>
                    <ComicCard/>
        <MobileToogle/>

              


            </div>

        </React.Fragment>
    )


     
}

export default Comic;