import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import SenateView from "./senateView";
import "./App.css";

const logo = require("./ai_logo.jpg");
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }
  render() {
    const { hits } = this.state;
    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>)
       }
      </ul>
      // <div>
      //   <Navbar className="ai-nav">
      //     <div className="header-container">
      //       <img className="nav-logo" src={logo} alt="ai-logo" />
      //       <span className="nav-title">
      //         <div className="ai-title-container">
      //           NY State Senate: Legislative Conferences
      //         </div>
      //       </span>
      //     </div>
      //   </Navbar>
      //   <SenateView />
      // </div>
    )  
    }
}

export default App;
