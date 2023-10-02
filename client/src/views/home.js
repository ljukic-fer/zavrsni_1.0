import React, { Fragment } from "react";

import { Hero, HomeContent } from "../components";

class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state={apiResponse:""};
  }
  

  callAPI(){
      fetch("http://localhost:6060/")
          .then(res => res.text())
          .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
      this.callAPI();
  }

  

  render() {
      return(
        <Fragment>
          <Hero />
          
          <hr />
      </Fragment>
      );
  };
};



/**
const Home = () => (
  <Fragment>
    <Hero />
    <hr />
  </Fragment>
);
*/

export default Home;