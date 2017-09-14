import React, { Component } from 'react';
import './ColorChart.css';

class ColorChart extends Component {
  constructor(props){
    super(props);
    this.state={
      red:125,
      green:125,
      blue:125,
      alpha:.75,
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }



  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyDown)
  }

  handleMouseMove(event){
    let red = event.clientX;
    let green = event.clientY;
    this.setState({ red:red, green:green})
  }

  handleKeyDown(event){
    //up key
    if(event.keyCode===38 && this.state.alpha<=.95){
      //make into integers and then round to avoid minute decimals
      let alpha = Math.round(this.state.alpha*100+5)/100;
      this.setState({alpha:alpha})
    }
    //down key
    if(event.keyCode===40 && this.state.alpha>=.05){
      //make into integers and then round to avoid minute decimals
      let alpha = Math.round(this.state.alpha*100-5)/100;
      this.setState({alpha:alpha})
    }
    //left key
    if(event.keyCode===37 && this.state.blue>=5){
      let blue = this.state.blue-5;
      this.setState({blue:blue})}
    //right key
    if(event.keyCode===39 && this.state.blue<=250){
      let blue = this.state.blue+5;
      this.setState({blue:blue})}
  }



  render() {
    let colorChartStyle = {background: "rgba("+this.state.red+","+this.state.green+","+this.state.blue+","+this.state.alpha+")"}

    return (
      <div className="color-chart-container">
        <div className="color-chart__background"  style={colorChartStyle}>
          <div id="color-chart"
          onMouseMove={this.handleMouseMove}
          >
            <p id="color-chart-text">THIS IS YOUR CONTROL PANEL</p>
          </div>
          <div id="RGBA">
            <h5>Red: {this.state.red}</h5>
            <h5>Green: {this.state.green}</h5>
            <h5>Blue: {this.state.blue}<p>Left/Right to change</p></h5>
            <h5>Alpha: {this.state.alpha}<p>Up/Down to change</p></h5>
          </div>
        </div>
      </div>
    );
  }
}


export default ColorChart;
