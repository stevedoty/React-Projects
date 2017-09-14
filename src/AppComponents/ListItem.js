import React from 'react';
import { NavLink } from 'react-router-dom';

const ListItem = props => {
  return(
      <div className="list__item">
        <NavLink to={props.project.path} className="list__item-link">
          <div className="list__item-image"></div>
          <div className="list__item-info">
            <div className="list__item-title">{props.project.title}</div>
            <div className="list__item-description">{props.project.description}</div>
          </div>
        </NavLink>
      </div>
  )
}

export default ListItem;
