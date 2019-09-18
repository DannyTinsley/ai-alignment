import React, { Component, Fragment, Form } from "react";
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import HelloReact from './hello_react';
import App from './App';

class Bills extends Component {

  // https://legislation.nysenate.gov/api/3/bills/2015/S1?key=DWeaFgwg1yD7he6DFabCAPKmyY5uJ504
  // const ReactAPI = require('react-api');
  // const API_KEY = "DWeaFgwg1yD7he6DFabCAPKmyY5uJ504";
  state = {
    message: null ,
    responseType: null,
    result: null,
    actions: null,
    activeVersion: null,
    additionalSponsors: null,
    adopted: false,
    amendmentVersions: [],
    amendments: null,
    approvalMessage: null,
    basePrintNo: null,
    basePrintNoStr: null,
    billType: null,
    calendars: [],
    committeeAgendas: [],
    milestones: [],
    pastCommittees: [],
    previousVersions: [],
    printNo: null,
    programInfo: null,
    publishStatusMap: null,
    publishedDateTime: null,
    reprintOf: null,
    session: 2015,
    signed: false,
    sponsor: null,
    status: null,
    substitutedBy: null,
    summary: null,
    title: null,
    vetoMessages: null,
    vetoed: false,
    votes: null,
    year: 0,
    isLoading: false,
    errors: null
  };

    constructor(){
      super();

    }

    render() {
      return(
        <React.Fragment>
        <h1> Bills</h1>

      </React.Fragment>
      )
    }

  // make a request for data
    async getBills() {

      const API_KEY = "DWeaFgwg1yD7he6DFabCAPKmyY5uJ504";
      // calling api and returning results as JSON
      const call_api = await fetch("https://cors-anywhere.herokuapp.com/https://legislation.nysenate.gov/api/3/bills/2015/S1?key=DWeaFgwg1yD7he6DFabCAPKmyY5uJ504");
      const bills = await call_api.json();
      console.log(bills);
      // console.log(bills.message);
      // console.log(bills.result.title);


  }




  // onload getBills()
  componentDidMount() {
    this.getBills();
    }
  }



export default Bills;
