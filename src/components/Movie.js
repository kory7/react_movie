import React, { Component } from "react";
import Poster from "./Poster";

class Movie extends Component {
  render() {
    return (
      <div>
        <p>Matrix</p>
        <Poster />
      </div>
    );
  }
}

export default Movie;
