// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

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



// const API = 'http://pokeapi.co/api/v2/pokemon/?limit=100';
// // const DEFAULT_QUERY = 'redux';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hits: [],
//     };
//   }
//   componentDidMount() {
//     fetch(API )//+ DEFAULT_QUERY)
//       .then(response => response.json())
//       .then(data => this.setState({ hits: data.hits }));
//     const { hits } = this.state;
    
//     // document.addEventListener('DOMContentLoaded', () => {
//     //   ReactDOM.render()
//       return (
//         <div>
//           <ul>
//           {hits.map(hit =>
//           // <li> <Text>Name: </Text> {hit.name}</li>
//           // <li>
//           //     <a href = {hit.url}><Text>Link: </Text>{hit.url}</a>
//           // </li>

//           {makeList(this.API.name)},
//           // {makeList(this.API.url)}

//           )
//       }
//        </ul>
//        </div>
//       // <ul>
//       //   {hits.map(hit =>
//       //     <li key={hit.objectID}>
//       //       <a href={hit.url}>{hit.title}</a>
//       //     </li>
//       //   )}
//       // </ul>
//     );
//   // })
// }
// }

// export default App;