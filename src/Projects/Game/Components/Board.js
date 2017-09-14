import React, {Component} from 'react';
import Character from './Character.js';




import '../Game.scss';


class Board extends Component{
  render(){
    return(
        <div id='board'>
          {this.props.squares.map(square=>{
            return(
              <div className='square' key={square.id}><p>{square.id}</p></div>
            );
          })}
          <Character playerPosition={this.props.playerPosition} />

        </div>
    );
  }
}

export default Board;
