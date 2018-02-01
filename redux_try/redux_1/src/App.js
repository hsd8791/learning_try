import React, { Component } from 'react';
import logo from './logo.svg';
// import style from './App.css';
import './App.css'

import Input from './components/input.js'
// console.log('style',style)
class App extends Component {
  onChange(val){
    console.log('val',val)
  }
  render() {
    return (
      <div className='App'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Input value='1' onChange={this.onChange.bind(this)} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
         // 
        //<p className={style.test}>test</p>
        }
      </div>
    );
  }
}

export default App;
