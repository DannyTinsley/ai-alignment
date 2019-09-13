import React, { Component } from "react";
import axios from 'axios';

class Bills extends Component {
  // render() {
  //   return (
  //     <div>
  //       <h2>Senate bill(s) sponsored by a given Senator</h2>
  //       <p>Mauris sem velit, vehicula eget sodales vitae,
  //       rhoncus eget sapien:</p>
  //       <ol>
  //         <li>Nulla pulvinar diam</li>
  //         <li>Facilisis bibendum</li>
  //         <li>Vestibulum vulputate</li>
  //         <li>Eget erat</li>
  //         <li>Id porttitor</li>
  //       </ol>
  //     </div>
  //   );
  // }
    // State will apply to the posts object which is set to loading by default
    state = {
      posts: [],
      isLoading: true,
      errors: null
    };
    // Now we're going to make a request for data using axios
    getPosts() {
      axios
        // This is where the data is hosted
        .get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json")
        // Once we get a response and store data, let's change the loading state
        .then(response => {
          this.setState({
            posts: response.data.posts,
            isLoading: false
          });
        })
        // If we catch any errors connecting, let's update accordingly
        .catch(error => this.setState({ error, isLoading: false }));
    }
    // Let's our app know we're ready to render the data
    componentDidMount() {
      this.getPosts();
    }
    // Putting that data to use
    render() {
      const { isLoading, posts } = this.state;
      return (
        <React.Fragment>
          <h2>Random Post</h2>
          <div>
            {!isLoading ? (
              posts.map(post => {
                const { _id, title, content } = post;
                return (
                  <div key={_id}>
                    <h2>{title}</h2>
                    <p>{content}</p>
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