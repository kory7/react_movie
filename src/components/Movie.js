import React, { Component } from "react";
import Poster from "./Poster";
import PropTypes from "prop-types";
class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Poster poster={this.props.poster} />
      </div>
    );
  }
}

export default Movie;
