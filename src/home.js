import React, { Component } from "react";

class Home extends Component {
    render() {
      return (
        <div className = "homepageBody">
          <h2>The Assignment</h2>
          

          <p>
This assignment is intended to gather a sense of how you approach your work and possibly learn new skills or frameworks. It serves to showcase some of your technical and communication skills. </p>

<p>Please fork the repository and complete the following two items:</p>

<li>Refactor the app in some way. This can be in functionality, structure, implementation, visual layout, or anything else you feel is valuable. This is intentionally open ended, we want you to choose what is important and interesting to you.</li>

<li>Add a feature that allows users to see the Senate bill(s) sponsored by a given Senator.</li>

<p>Use the NY Senate Open Legislation API, specifically the New York State Bills and Resolutions API, as the data source.</p>

<p>Please add a feature to the existing Interactive Senate Display, as you see fit, to show users the bill(s) that a given Senator is sponsoring.</p>
   
          
        </div>
      );
    }
  }
   
  export default Home;