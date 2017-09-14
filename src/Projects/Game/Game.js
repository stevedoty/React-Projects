import React, {Component} from 'react';
import Board from './Components/Board.js';
// import keydown from 'react-keydown';
// npm install --save react-keydown

import './Game.scss';


class Game extends Component{
  constructor(props){
    super(props);
    this.state={

      // playerPosition:{top:0, left:0}
    }

  }

// componentDidMount(){
//   document.addEventListener('keydown', this.handleMovement.bind(this))
// }
//
//
//
// handleMovement(event){
//   let player = document.getElementById('player');
//   let playerPosition = this.state.playerPosition;
//   let top = playerPosition.top;
//   let left = playerPosition.left;
//   let sampleSize = 80
//   let blocked = this.state.squares.filter(square=>square.blocked);
//   let blockedId = blocked.map(square=>square.id);
//   let lefts = blockedId.map(square=>document.getElementById('').style.left);
// console.log(lefts)


//     //move left
//     if(event.keyCode==37 && left>=1){
//       left-=1
//     }
//     //move up
//     else if(event.keyCode==38 && top>=1){
//       top-=1
//     }
//     //move right
//     else if(event.keyCode==39 && left<=2){
//       left+=1
//     }
//     //move down
//     else if(event.keyCode==40 && top<=2){
//       top+=1
//     }
//     //Refactor
//     this.setState({playerPosition: {top, left} },()=>{
//       player.style.left = this.state.playerPosition.left*sampleSize+'px';
//       player.style.top = this.state.playerPosition.top*sampleSize+'px';
//     });
// }

// <Board
//     squares={this.state.squares}
//     handleMovement={this.handleMovement}
//     playerPosition={this.state.playerPosition}
// />

  render(){
    return(

      <div id='container'>



      </div>

    );
  }
}

export default Game;
