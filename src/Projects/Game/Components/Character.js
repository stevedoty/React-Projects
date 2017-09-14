import React, {Component} from 'react';
import {Android} from 'material-ui-icons';

import '../Game.scss';


class Character extends Component{
  render(){
    return(
        <div id='player' style={this.props.playerPosition}>
          <Android id='character' />
        </div>
    );
  }
}

export default Character;
