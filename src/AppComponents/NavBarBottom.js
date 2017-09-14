import React from 'react';
import Stars from '../Images/Stars.jpg';
import ProfilePic from '../Images/ProfilePic.jpg';

const NavBarBottom = props => (
  <div className="nav-bar-bottom" style={props.navBarProfileStyles}>
      <div className="profile-pic-container nav-bar-item">
          <div className="profile-pic" style={{backgroundImage:`url(${ProfilePic})`}}></div>
      </div>
  </div>
)

export default NavBarBottom;
