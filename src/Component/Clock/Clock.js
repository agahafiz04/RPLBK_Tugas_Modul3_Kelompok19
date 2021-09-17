import React, { Component } from 'react';
import '../../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <h2>Clock</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
        <Clock /> 
        </article>
      </div>
    );
  }
}


          


<div class="button-container">

</div>

class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div>
        <h3>Jam Berapa Sekarang?</h3>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default App;