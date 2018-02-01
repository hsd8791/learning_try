import React from 'react';
import style from '../app.css'
import Test from './test.jsx'
export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1 className={style.title}>Hello World</h1>
        <h2 className={style.title}>Hello World</h2>
        <Test></Test>
      </div>);
  }
}