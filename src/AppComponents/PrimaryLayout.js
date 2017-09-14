import React from 'react';
import { Route, Switch } from 'react-router-dom';


import NavBar from './NavBar';
import List from './List';


const PrimaryLayout = props => {
  return(
    <div className="primary-container">
      <header className="primary-header">
          <Route exact path="/" key={"NavBar_key"}>
             <NavBar
                handleProfileClick={props.handleProfileClick}
                handleDropdownClick={props.handleDropdownClick}
                navBarContactsStyles={props.navBarContactsStyles}
                navBarProfileStyles={props.navBarProfileStyles}
                Stars={props.Stars}
                dropdown={props.dropdown}
                />
          </Route>
      </header>
      <main className="primary-main">
        <Switch>
          <Route exact path="/">
            <List
                projects={props.projects}
                experience={props.experience}
                hobbies={props.hobbies}
                />
          </Route>
          {props.projects.map( project => <Route path={project.path} component={project.component} key={project.key}/>   )}
        </Switch>
      </main>
    </div>
  )
}

export default PrimaryLayout;
