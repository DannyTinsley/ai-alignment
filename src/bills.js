import React, { Component } from "react";
import axios from 'axios';

class Bills extends Component {
 
  // } https://legislation.nysenate.gov/api/3/bills/2015/S1?key=DWeaFgwg1yD7he6DFabCAPKmyY5uJ504

  state = {
    bills: [],
    isLoading: true,
    errors: null
  };
  // Now we're going to make a request for data using axios
  getBills() {
      // This is where the data is hosted
      fetch("https://legislation.nysenate.gov/api/3/bills/2015/S1?key=DWeaFgwg1yD7he6DFabCAPKmyY5uJ504")
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          bills: response.data.bills,
          isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getBills();
  }
  // Putting that data to use
  render() {
    const { isLoading, bills} = this.state;
    return (
      <React.Fragment>
        <h2>Random Bill</h2>
        <div>
          {!isLoading ? (
            bills.map(bill => {
              const { title, session } = bill;
              return (
                <div>
                  <h2>{title}</h2>
                  <p>{session}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }



}
 
export default Bills;