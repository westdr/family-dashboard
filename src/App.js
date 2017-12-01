import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="large-wrapper">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div className="wrapper">
          <div className="box a">
            <div className="header">A</div>
          </div>
          <div className="box b">
            <div className="header">B</div>
          </div>
          <div className="box c">
            <div className="header">C</div>
          </div>
          <div className="box d">
            <div className="header">D</div>
          </div>
        </div>
      </div>



    );
  }
}

export default App;
