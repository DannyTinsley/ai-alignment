// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Bills from "./bills";
import Contact from "./contact";
import ReactDOM from 'react-dom';
import HelloReact from './hello_react'
import axios from 'axios';


export function showAPI(){
  console.log('Hello World!');
};

class App extends Component {
  render() {
    return (
      
      <HashRouter>
         <div>
          <h1>Alignment Assignment</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/bills">Senate Bills</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/bills" component={Bills}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
        
    );
  }
   // State will apply to the posts object which is set to loading by default
//    state = {
//     posts: [],
//     isLoading: true,
//     errors: null
//   };
//   // Now we're going to make a request for data using axios
//   getPosts() {
//     axios
//       // This is where the data is hosted
//       .get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json")
//       // Once we get a response and store data, let's change the loading state
//       .then(response => {
//         this.setState({
//           posts: response.data.posts,
//           isLoading: false
//         });
//       })
//       // If we catch any errors connecting, let's update accordingly
//       .catch(error => this.setState({ error, isLoading: false }));
//   }
//   // Let's our app know we're ready to render the data
//   componentDidMount() {
//     this.getPosts();
//   }
//   // Putting that data to use
//   render() {
//     const { isLoading, posts } = this.state;
//     return (

//       <HashRouter>
//       <div>
//        <h1>Alignment Assignment</h1>
//        <ul className="header">
//          <li><NavLink exact to="/">Home</NavLink></li>
//          <li><NavLink to="/bills">Senate Bills</NavLink></li>
//          <li><NavLink to="/contact">Contact</NavLink></li>
//        </ul>
//        <div className="content">
//          <Route exact path="/" component={Home}/>
//          <Route path="/bills" component={Bills}/>
//          <Route path="/contact" component={Contact}/>
//        </div>
//      </div>
//      </HashRouter>
      
//       <React.Fragment>
//         <h2>Random Post</h2>
//         <div>
//           {!isLoading ? (
//             posts.map(post => {
//               const { _id, title, content } = post;
//               return (
//                 <div key={_id}>
//                   <h2>{title}</h2>
//                   <p>{content}</p>
//                   <hr />
//                 </div>
//               );
//             })
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </React.Fragment>
//     );
//   }
}

export function showHelloReact() {
  var hello = document.getElementById('Hello_react');
  return { status: true }
}
showHelloReact.prototype.render = function() {};
console.log(typeof new showHelloReact().render);

// ReactDOM.render(<Hello_react />, document.getElementById('Hello_react'));

class Hello extends React.Component {
  render() {
    // return <h1>Hi</h1>
    return (<HelloReact />, document.getElementById('Hello_react'));
    
  }
  
}


 
export default App;