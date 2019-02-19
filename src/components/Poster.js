import React from "react";
import PropTypes from "prop-types";
const Poster = ({ poster }) => {
  return (
    <div>
      <img src={poster} alt="Poster" />
    </div>
  );
};

Poster.propTypes = {
  poster: PropTypes.string.isRequired
};
export default Poster;
