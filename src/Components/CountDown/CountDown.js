import React, { Component } from 'react';
import './CountDown.css';

class CountDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 0,
      hour: 0,
      minutes: 0,
      seconds: 0,
      now: 0,
      deadline: '2018-03-20',
      curTime: 0,
    }
  } 
  
  remainingTime(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t /1000) % 60 );
    var minutes = Math.floor((t / 1000/60) % 60 );
    var hours = Math.floor(( t/(1000*60*60)) % 24 );
    var days = Math.floor( t/ (1000*60*60*24) );
  
    return {
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days
    }
  }

  initialize(endtime) {
    const updateClock = () => {
      var t = this.remainingTime(endtime);      
      this.setState({
        // curTime : new Date().toLocaleString(),
        seconds: t.seconds,
        minutes: t.minutes,
        hours: t.hours,
        days: t.days,
      })

      if (t.total <= 0) {
        clearInterval(timeInterval)
      }     
    }
    updateClock();
    var timeInterval = setInterval(updateClock, 1000)
  }

  componentDidMount() {    
    this.initialize(this.state.deadline);    
  } 

  render() {    
    return(      
      <div id="timer" className="mid-content">
      <span style={{color: "tomato", fontSize: "20px"}}>Development put on hold.</span>
      <span>We'll Back in :</span>
        <span>{this.state.days}</span>Days
        <span>{this.state.hours}</span>Hours
        <span>{this.state.minutes}</span>Minutes
        <span>{this.state.seconds}</span>Seconds        
      </div>
    )
  }
}
export default CountDown;
