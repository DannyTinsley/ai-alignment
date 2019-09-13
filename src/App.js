
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

const API_KEY = process.env.REACT_APP_TOOLS_API_KEY;

console.log("API", API_KEY);


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
            <input type="text" onChange={this.handleChange} className="input Search" placeholder="Search..." />

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

  componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }

  handleChange(e) {
    // Variable to hold the original version of the list
let currentList = [];
    // Variable to hold the filtered list before putting into state
let newList = [];

    // If the search bar isn't empty
if (e.target.value !== "") {
        // Assign the original list to currentList
  currentList = this.props.items;

        // Use .filter() to determine which items should be displayed
        // based on the search terms
  newList = currentList.filter(item => {
            // change current item to lowercase
    const lc = item.toLowerCase();
            // change search term to lowercase
    const filter = e.target.value.toLowerCase();
            // check to see if the current list item includes the search term
            // If it does, it will be added to newList. Using lowercase eliminates
            // issues with capitalization in search terms and search content
    return lc.includes(filter);
  });
} else {
        // If the search bar is empty, set newList to original task list
  newList = this.props.items;
}
    // Set the filtered state based on what our rules added to newList
this.setState({
  filtered: newList
});
}
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