import React, { Component } from "react";
import Intro from "../../components/intro/Intro";

import Banner from "../../components/banner/Banner";
import Projects from "../../components/projects/Projects";
import "./home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Intro />
        <Banner />
        <Projects />
      </div>
    );
  }
}

export default Home;
