import React from 'react';
import ProfilePic from '../Images/ProfilePic.jpg';
import { NavLink } from 'react-router-dom';

const NavBarTop = props => (
  <div className="nav-bar-top">
      <div className="nav-bar-top__dropdown nav-bar-item icon-container" onClick={props.handleDropdownClick}>
          <props.dropdown id="dropdown-icon"/>
      </div>
      <div className="nav-bar-top__name name-container nav-bar-item">
          <NavLink to='/' className="name">
              Steve Doty
          </NavLink>
      </div>
      <div className="profile-pic__icon-container icon-container nav-bar-item" onClick={props.handleProfileClick}>
          <div className="profile-pic__icon icon" style={{backgroundImage:`url(${ProfilePic})`}}></div>
      </div>
  </div>
)

export default NavBarTop;
