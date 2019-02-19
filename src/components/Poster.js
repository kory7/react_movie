import React from "react";
import PropTypes from "prop-types";
const Poster = ({ poster, alt }) => {
  return (
    <div>
      <img src={poster} alt={alt} title={alt} />
    </div>
  );
};

Poster.propTypes = {
  poster: PropTypes.string.isRequired
};

export default Poster;
