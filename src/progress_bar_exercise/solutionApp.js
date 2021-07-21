import React from "react";
import './solutionApp.css';
import ProgressBar from './progressBar';
import ControlButtons from './controlButtons';


class SolutionApp extends React.Component {
  constructor(props){
    super(props);
    this.maxProgress = 100;
    this.state = {
      completed: 0,
      startClicked: 0,
      finishClicked: 0,
    }
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);

  }

  startTimer(){
    this.timerID =       
      setInterval(()=>
      {
        if (this.state.completed < this.maxProgress)
          this.setState({completed: this.state.completed + 1})
        else 
          clearInterval()
      }, 200);
  }

  startTimerFast(){
    this.timerID =       
      setInterval(()=>
      {
        if (this.state.completed < this.maxProgress)
          this.setState({completed: this.state.completed + 1})
        else 
          clearInterval()
      }, 15);
  }

  stopTimer(){
    clearInterval(this.timerID);
  }

  handleClick(btn){

    if (btn === 0) {
      this.stopTimer()  
      this.setState({completed: 1});      
      this.startTimer()

    } else if (btn === 1) {
  
      // alert('Finish Clicked ...')
      this.startTimerFast()
    }
  };


  render() {
    let r = 255;
    let g = 200 - (this.state.completed*2);
    let b = 0;
    let color = "rgba(" + String(r) + ", " + String(g) + ", " + String(b) + ", 1)"

    color = 'linear-gradient(to right, rgba(255,200,0,1), ' + color + ')';
    // linear-gradient(to right, rgba(255,100,0,1), rgba(255,0,0,1));

    return (
      <div className='SolutionApp'>

            hello 

            <ProgressBar 
            bgcolor ={color } 
            completed = {this.state.completed} />            
            <div>
              <ControlButtons 
                onClick = {(btn) => this.handleClick(btn)}
                completed = {this.state.completed}
                startClicked = {this.state.startClicked}
                finishClicked = {this.state.finishClicked}
              />
                  
            </div>
            
      </div>
    );
  }
}


export default SolutionApp;
