import React from "react";
import Data from "./data.json"


function  Usercard (){
    return(
        <React.Fragment>
                <p className="user_card_text">Based on the people you follow</p>

            <div className="user_card_section">
                { Data.map(post =>{
                    return(
                        <div >
                        <div className="user_card">
                            <img src={post.base_img} alt="baser"/>
                            <h4>{post.title}</h4>
                            <p> {post.content}</p>
                            <button className="user_button">{post.buttoncontent} </button>
                        </div>
                    </div>
                    )
                })}
            </div>

        </React.Fragment>
    )
}

export default Usercard;