import React, { Component, Fragment } from 'react'

import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


const Hello = props => (
    <div>Hello {props.name}!</div>
  )
  
  Hello.defaultProps = {
    name: 'David'
  }
  
  Hello.propTypes = {
    name: PropTypes.string
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Hello name="React" />,
      document.body.appendChild(document.createElement('div')),
    )
  })
  
  

const API = 'legislation.nysenate.gov/api/3/bills/2015/S1?key=DWeaFgwg1yD7he6DFabCAPKmyY5uJ504';
const SEARCH_BY_SENATOR = 'legislation.nysenate.gov/api/3/bills/search?term=sponsor.member.shortName:BRESLIN&sort=status.actionDate:DESC';
// const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }
  componentDidMount() {
    fetch(API )//+ DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
    const { hits } = this.state;
    
    return (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Steve Jobs</h5>
            <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
            <p class="card-text">Stay Hungry, Stay Foolish</p>
          </div>
        </div>
      );
      }
      
}

export default App;