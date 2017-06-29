import React, { Component } from 'react';
import NumPicker from './NumPicker';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      num: null
    };
  }
  render() {
    const { num } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!num &&
            <h2>Select the number</h2>
          }
          {num &&
            <h2>You selected the number {num}</h2>
          }
        </div>
        <div className="App-content">
          <div className="App-question">
            How many players?
          </div>
          <NumPicker
            value={num}
            onChange={(num) => this.setState({ num })}
            options={[4, 8, 16, 32, 64]}
          />
        </div>
      </div>
    );
  }
}

export default App;
