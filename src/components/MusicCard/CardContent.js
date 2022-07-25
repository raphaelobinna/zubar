import React from "react";
// import { Link } from 'react-router-dom';






class CardContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card_section">
          <div className="top_bar">
            <span> <img src={this.props.profile} alt="profile" /> </span>
            <span className="profile_name"> {this.props.name}</span>
            <p> {this.props.username}</p>

            <div className="top_bar_left">
              <img src="asset/img/icons/Ellipsis.svg" alt="menu" /><br />
              <span>{this.props.time}</span>
            </div>
          </div>

          <div className="user_area">
            <img src={this.props.baseimage} alt="baser" className="base_image" />

            <div class="text">{this.props.text}</div>
            <span><img src="asset/img/icons/Vector (1).svg" alt="icons" /></span>
            <span><img src="asset/img/icons/Vector (2).svg" alt="icons" /></span>
            <span><img src="asset/img/icons/Send Tip.svg" alt="icons" /></span>
            <span><img src="asset/img/icons/Vector (3).svg" alt="icons" /></span>

          </div>

          <div className="story_section">

            <p>{this.props.story} </p>

          </div>
        </div>

      </React.Fragment>
    );
  }
}
export default CardContent;