import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import {Add, Clear} from 'material-ui-icons';
import Stars from './Images/Stars.jpg';

import CalculatorApp from './Projects/CalculatorApp/CalculatorApp.js';
import CalculatorAppV2 from './Projects/CalculatorAppV2/CalculatorApp-v2.js';
import ColorChart from './Projects/ColorChart/ColorChart.js';
import Game from './Projects/Game/Game.js';
import TodoApp from './Projects/TodoApp/TodoApp.js';
import TowerOfHanoi from './Projects/TowerOfHanoi/TowerOfHanoi.js';

import PrimaryLayout from './AppComponents/PrimaryLayout';

import registerServiceWorker from './registerServiceWorker';

// App{
//      PrimaryLayout{
//           HomeNavBar{
//                 home-nav-bar-top
//                 home-nav-bar-bottom
//           }
//           HomeList{
//                 HomeListItem{   CalculatorApp     }
//                 HomeListItem{   CalculatorAppV2   }
//                 HomeListItem{   ColorChart        }
//                 HomeListItem{   Game              }
//                 HomeListItem{   TodoApp           }
//                 HomeListItem{   TowerOfHanoi      }
//           }
//           HomeFooter{
//                 page-break
//                 extra-info
//           }
//      }
// }

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      navBarContactsStyles:{
          display:'none',
          backgroundImage:`url(${Stars})`
      },
      navBarProfileStyles:{
          display:'none',
          backgroundImage:`url(${Stars})`
      },
      dropdown:Add
    }
  }

  render(){

    let handleProfileClick = () => {
      if(this.state.navBarProfileStyles.display==='none'){
        this.setState({
          navBarProfileStyles:{
              display:'block',
              backgroundImage:`url(${Stars})`
          }
        })
      }else{
        this.setState({
          navBarProfileStyles:{
              display:'none',
              backgroundImage:`url(${Stars})`
          }
        })
      }
    }
    let handleDropdownClick = () => {
      if(this.state.navBarContactsStyles.display==='none'){
        this.setState({
          navBarContactsStyles:{
              display:'block',
              backgroundImage:`url(${Stars})`
          },
          dropdown:Clear
        })
      }else{
        this.setState({
          navBarContactsStyles:{
              display:'none',
              backgroundImage:`url(${Stars})`
          },
          dropdown:Add
        })
      }
    }
    let projects=[
      {
        title:'CalculatorApp', description:'', img:"none", path:'/CalculatorApp', component:CalculatorApp, key:"CalculatorApp_key"
      },
      {
        title:'CalculatorAppV2', description:'', img:"none", path:'/CalculatorAppV2', component:CalculatorAppV2, key:"CalculatorAppV2_key"
      },
      {
        title:'ColorChart', description:'', img:"none", path:'/ColorChart', component:ColorChart, key:"ColorChart_key"
      },
      {
        title:'Game', description:'', img:"none", path:'/Game', component:Game, key:"Game_key"
      },
      {
        title:'TodoApp', description:'', img:"none", path:'/TodoApp', component:TodoApp, key:"TodoApp_key"
      },
      {
        title:'TowerOfHanoi', description:'', img:"none", path:'/TowerOfHanoi', component:TowerOfHanoi, key:"TowerOfHanoi_key"
      }
    ];
    let experience = [
      {
        company:'Self-Employed',
        title:'Front End Developer',
        date:'Oct 2016 - Present',
        location:'Redwood City, Ca'
      },
      {
        company:'NorCal Construction',
        title:'General Carpenter',
        date:'Aug 2016 - Oct 2016',
        location:'Atherton, Ca'
      },
      {
        company:'AW Construction',
        title:'Finish Carpenter',
        date:'Apr 2015- Aug 2016',
        location:'Menlo Park, Ca'
      },
    ];
    let hobbies = [
      'Being in Nature',
      'Coding',
      'Reading',
      'Playing Video Games',
      'Watching Movies',
      'Carpentry / Woodworking'
    ]

    return(
        <BrowserRouter>
            <PrimaryLayout
                projects={projects}
                experience={experience}
                hobbies={hobbies}
                handleProfileClick={handleProfileClick}
                handleDropdownClick={handleDropdownClick}
                navBarContactsStyles={this.state.navBarContactsStyles}
                navBarProfileStyles={this.state.navBarProfileStyles}
                Stars={Stars}
                dropdown={this.state.dropdown}
            />
        </BrowserRouter>
    )
  }
}



ReactDOM.render( <App/> , document.getElementById('root') );
registerServiceWorker();
