import React, { Component, Fragment, Form } from "react";
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import HelloReact from './hello_react';

class Bills extends Component {

  // https://legislation.nysenate.gov/api/3/bills/2015/S1?key=DWeaFgwg1yD7he6DFabCAPKmyY5uJ504
  // const ReactAPI = require('react-api');
  // const API_KEY = "DWeaFgwg1yD7he6DFabCAPKmyY5uJ504";

  state = {
    bills: [],
    isLoading: false,
    errors: null
  };

  // render data on page
      render(){
    // const { isLoading, bills} = this.state;
    return (

      <div>
      <React.Fragment>
          <h2>Bills</h2>

      </React.Fragment>
      </div>
        // <h2>Random Bill</h2>
      // <h2>{getBills.bills.message}</h2>
        // <div>
        //   {!isLoading ? (
        //     bills.map(bill => {
        //       const { title, session } = bill;
        //       return (
        //         <div>
        //           <h2>{bill.title}</h2>
        //           <p>{bill.session}</p>
        //           <hr />
        //         </div>
        //       );
        //     })
        //   ) : (
        //     <p>Loading...</p>
        //   )}
        // </div>
        // </React.Fragment>
    );
  }

    constructor(){
      super();

    }
  // make a request for data
    async getBills() {

      const API_KEY = "DWeaFgwg1yD7he6DFabCAPKmyY5uJ504";
      // calling api and returning results as JSON
      const call_api = await fetch("https://cors-anywhere.herokuapp.com/https://legislation.nysenate.gov/api/3/bills/2015/S1?key=DWeaFgwg1yD7he6DFabCAPKmyY5uJ504");
      const bills = await call_api.json();
      console.log(bills);
      
  }



  // onload getBills()
  componentDidMount() {
    this.getBills();
    // this.showBills();
  }
}


export default Bills;
