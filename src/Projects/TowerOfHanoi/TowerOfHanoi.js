import React, { Component } from 'react';
import Discs from './components/Discs';
import './TowerOfHanoi.css';

class TowerOfHanoi extends Component {
  constructor(props){
    super(props);
    this.state={
      tower1: [],
      tower2: [],
      tower3: [],
      inputValue:'',
      selectedDisc: null,
      selectedDiscWidth: null,
      originTower: null,
      moves: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePlacement = this.handlePlacement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(event){
    this.setState({
      tower1: [],
      tower2: [],
      tower3: [],
      inputValue:'',
      selectedDisc: null,
      selectedDiscWidth: null,
      originTower: null,
      moves: 0
    })
  }

  componentDidMount(){
    document.getElementById('input-field').addEventListener('keydown', (event)=>{
      if( event.keyCode == 13 ){
        document.getElementById('Enter-btn').click()
      }
    })
  }

  handlePlacement(event){
  //drag and drop ?
    const _id = event.currentTarget.id;
    const firstDisc = event.currentTarget.children[0];
    let newTower1 = this.state.tower1.slice(0);
    let newTower2 = this.state.tower2.slice(0);
    let newTower3 = this.state.tower3.slice(0);
    //This will be used later
    let discPlacementParameters = (selectedTower)=>{
      if(selectedTower.length===0){return true}
      else if(parseInt(this.state.selectedDiscWidth) < parseInt(selectedTower[0].style.width)){return true}
      else if(parseInt(this.state.selectedDiscWidth) > parseInt(selectedTower[0].style.width)){
        if(this.state.originTower==="tower-1"){
          newTower1.unshift(this.state.selectedDisc); this.setState({tower1: newTower1, selectedDisc: null, selectedDiscWidth:null, originTower:null})
        }else if(this.state.originTower==="tower-2"){
          newTower1.unshift(this.state.selectedDisc); this.setState({tower2: newTower2, selectedDisc: null, selectedDiscWidth:null, originTower:null})
        }else if(this.state.originTower==="tower-3"){
          newTower1.unshift(this.state.selectedDisc); this.setState({tower3: newTower3, selectedDisc: null, selectedDiscWidth:null, originTower:null})
        }
      }
    }
  // debugger
    if( _id==="tower-1" ){
      if(this.state.selectedDisc && discPlacementParameters(this.state.tower1)){
          newTower1.unshift(this.state.selectedDisc);
          let moves = this.state.moves;
          this.setState({tower1:newTower1, selectedDisc:null, selectedDiscWidth:null, originTower:null, moves:moves+1});
      }else if(this.state.selectedDisc===null && firstDisc){
          const selectedDisc = newTower1.shift();
          const selectedDiscWidth = selectedDisc.style.width;
          this.setState({tower1:newTower1, selectedDisc: selectedDisc, selectedDiscWidth: selectedDiscWidth, originTower: "tower-1"});
      }
    }
    else if( _id==="tower-2"  ){
      if(this.state.selectedDisc && discPlacementParameters(this.state.tower2)){
          newTower2.unshift(this.state.selectedDisc);
          let moves = this.state.moves;
          this.setState({tower2:newTower2, selectedDisc:null, selectedDiscWidth:null, originTower:null, moves:moves+1});
      }else if(this.state.selectedDisc===null && firstDisc){
          const selectedDisc = newTower2.shift();
          const selectedDiscWidth = selectedDisc.style.width;
          this.setState({tower2:newTower2, selectedDisc: selectedDisc, selectedDiscWidth: selectedDiscWidth, originTower: "tower-2"});
      }
    }
    else if( _id==="tower-3"  ){
      if(this.state.selectedDisc && discPlacementParameters(this.state.tower3)){
          newTower3.unshift(this.state.selectedDisc);
          let moves = this.state.moves;
          this.setState({tower3:newTower3, selectedDisc:null, selectedDiscWidth:null, originTower:null, moves:moves+1});
      }else if(this.state.selectedDisc===null && firstDisc){
          const selectedDisc = newTower3.shift();
          const selectedDiscWidth = selectedDisc.style.width;
          this.setState({tower3:newTower3, selectedDisc: selectedDisc, selectedDiscWidth: selectedDiscWidth, originTower: "tower-3"});
      }
    }
  }

  handleSubmit(event){
    this.setState({})
      let newTower = this.state.tower1.slice(0);
      for(let i=0; i<this.state.inputValue; i++){
          newTower.push({index:i, style:{width: ((i+1)*25) + 'px'}})
      }
      this.setState({tower1: newTower, inputValue:''})
  }

  handleChange(event){
    this.setState({inputValue: event.target.value })
  }


  render() {

    return (
      <div className="App">

        <div className="App-header">
          <h2>Tower Of Hanoi</h2>
          <input
            id="input-field"
            placeholder="how many discs (1-10)?"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button id="Enter-btn" onClick={this.handleSubmit}>Enter</button>
          <button onClick={this.handleReset}>Reset</button>
          <p id="rules">
            Rule 1: Only the top disc may be moved at a time {<br/>}
            Rule 2: Only smaller discs can be placed on others {<br/>}
            Rule 3: To win, the complete tower must be sequentially order in a new box
          </p>
        </div>
        <h4 id="moves">{this.state.moves}</h4>
        <div className="App-body">
          <div id="board">
            <div className="board-blocks">
              <div className="tower-container">
                  <div id="tower-1" className="tower" onClick={this.handlePlacement}>
                      {this.state.tower1.map(disc=>{
                        return(
                          <Discs disc={disc} key={disc.index}/>
                        );
                      })}
                  </div>
              </div>
            </div>
            <div className="board-blocks">
              <div className="tower-container">
                  <div id="tower-2" className="tower" onClick={this.handlePlacement}>
                      {this.state.tower2.map(disc=>{
                        return(
                          <Discs disc={disc} key={disc.index}/>
                        );
                      })}
                  </div>
              </div>
            </div>
            <div className="board-blocks">
              <div className="tower-container">
                  <div id="tower-3" className="tower" onClick={this.handlePlacement}>
                      {this.state.tower3.map(disc=>{
                        return(
                          <Discs disc={disc} key={disc.index}/>
                        );
                      })}
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TowerOfHanoi;
