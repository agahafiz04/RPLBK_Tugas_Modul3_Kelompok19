import React, { Component } from "react";
import "../Todo/TodoList.css";


export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
        
      <div className="App">
          
          <div className="title">
            <h2>Counter Program</h2>
            <div className="underline"></div>
          </div>

          <div class="button-container">
          <article className="review">
            <button onClick={this.incrementCount} className="btn">Tambah(+)</button>
            <button onClick={this.decrementCount} className="btn">Kurang(-)</button>
            <h2>{this.state.count}</h2>
          </article>
        </div>
        

        
      </div>

      
    );
  }
}
