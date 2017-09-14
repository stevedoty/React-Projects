import React from 'react';
import Stars from '../Images/Stars.jpg';

import NavBarTop from './NavBarTop.js';
import NavBarMiddle from './NavBarMiddle.js';
import NavBarBottom from './NavBarBottom.js';

const NavBar = props => (
  <div className="nav-bar" style={{backgroundImage:`url(${Stars})`}}>
    <NavBarTop
      handleDropdownClick={props.handleDropdownClick}
      handleProfileClick={props.handleProfileClick}
      dropdown={props.dropdown}
    />
    <NavBarMiddle
    navBarContactsStyles={props.navBarContactsStyles}
    />
    <NavBarBottom
      navBarProfileStyles={props.navBarProfileStyles}
    />
  </div>
)

export default NavBar;
