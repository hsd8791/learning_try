console.log('hello woshinibaba')
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// const About = class extends React.Component{
//   render() {
//     return (
//       <div>About</div>
//     );
//   }
// }
// const Inbox =class extends React.Component{
//   render() {
//     return (
//       <div>Inbox</div>
//     );
//   }
// }
// const Home =class extends React.Component{
//   render() {
//     return (
//       <div>Home</div>
//     );
//   }
// }
// // const Home = React.createClass({/*...*/})

// const App = class extends React.Component{
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       route: window.location.hash.substr(1)
//     };
//   }

//   componentDidMount() {
//     window.addEventListener('hashchange', () => {
//       this.setState({
//         route: window.location.hash.substr(1)
//       })
//     })
//   }

//   render() {
//     let Child
//     switch (this.state.route) {
//       case '/about': Child = About; break;
//       case '/inbox': Child = Inbox; break;
//       default:      Child = Home;
//     }

//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><a href="#/about">About</a></li>
//           <li><a href="#/inbox">Inbox</a></li>
//         </ul>
//         <Child/>
//       </div>
//     )
//   }
// }


ReactDOM.render(<App />, document.getElementById('root'));