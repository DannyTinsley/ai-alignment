
import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { showHelloReact } from './App';
// import axios from 'axios';


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
  showHelloReact();
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})



const API = 'legislation.nysenate.gov/api/3/bills/2015/S1?key=DWeaFgwg1yD7he6DFabCAPKmyY5uJ504';
const SEARCH_BY_SENATOR = 'legislation.nysenate.gov/api/3/bills/search?term=sponsor.member.shortName:BRESLIN&sort=status.actionDate:DESC';
// const DEFAULT_QUERY = 'redux';

export class HelloReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }
}


export default HelloReact;
