// // Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// // like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// // of the page.

// import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import { showHelloReact } from './App.js';

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }


// document.addEventListener('DOMContentLoaded', () => {
//   // showHelloReact();
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })



// const API = 'legislation.nysenate.gov/api/3/bills/2015/S1?key=DWeaFgwg1yD7he6DFabCAPKmyY5uJ504';
// const SEARCH_BY_SENATOR = 'legislation.nysenate.gov/api/3/bills/search?term=sponsor.member.shortName:BRESLIN&sort=status.actionDate:DESC';
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
    
//     return (
//         <div class="card">
//           <div class="card-body">
//             <h5 class="card-title">Steve Jobs</h5>
//             <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
//             <p class="card-text">Stay Hungry, Stay Foolish</p>
//           </div>
//         </div>
//       );
//       }
      
// }

// export default App;

// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { showHelloReact } from './App';
import axios from 'axios';


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

   
  
  // componentDidMount() {
  //   fetch(API )//+ DEFAULT_QUERY)
  //     .then(response => response.json())
  //     .then(data => this.setState({ hits: data.hits }));
  //   const { hits } = this.state;
    
  //   return (
  //       <div class="card">
  //         <div class="card-body">
  //           <h5 class="card-title">Steve Jobs</h5>
  //           <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
  //           <p class="card-text">Stay Hungry, Stay Foolish</p>
  //           {hits.map(hit =>
  //           <ul>
  //         <li key={hit.objectID}>
  //           <a href={hit.url}>{hit.title}</a>
  //         </li>
  //           </ul>)}
  //         </div>
  //       </div>
  //     );

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     fetch(API) //+ DEFAULT_QUERY)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Something went wrong ...');
//         }
//       })
//       .then(data => this.setState({ hits: data.title, isLoading: false }))
//       .catch(error => this.setState({ error, isLoading: false }));
//        const { hits, isLoading, error } = this.state;
//     if (error) {
//       return <p>{error.message}</p>;
//     }
//     if (isLoading) {
//       return <p>Loading ...</p>;
//     }
    
//   document.addEventListener('DOMContentLoaded', () => { ReactDOM.render(//) {
//     // const { hits, isLoading, error } = this.state;
//     // if (error) {
//     //   return <p>{error.message}</p>;
//     // }
//     // if (isLoading) {
//     //   return <p>Loading ...</p>;
//     // }
//     // return (
       
//       <ul>
       
//         {hits.map(hit =>
//         <React.Fragment>
//           <li key={hit.objectID}>
//            <h4>{hit.title}</h4>
//           </li>
//           <li key= {hit.session}><p>{hit.session}</p>
//           </li>
//         <li key = {hit.fullName}><p>{hit.fullName}</p>
//         </li>
//          </React.Fragment> 
//          )
//       }
//       </ul>
  
//     );
//   })
// }

// componentDidMount() {
//   fetch('legislation.nysenate.gov/api/3/bills/2015/S1?key=DWeaFgwg1yD7he6DFabCAPKmyY5uJ504')
//     .then(res => res.json())
//     .then(
//       (result) => {
//         this.setState({
//           isLoaded: true,
//           items: result.items
//         });
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });
//       }
//     )
// }

// render() {
//   const { error, isLoaded, items } = this.state;
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map(item => (
//           <li key={item.title}>
//             {item.title} {item.session}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
}
  


export default HelloReact;