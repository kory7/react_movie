import React from "react";
import Poster from "./Poster";
import PropTypes from "prop-types";
const Movie = ({ poster, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Poster poster={poster} />
    </div>
  );
};
Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default Movie;
