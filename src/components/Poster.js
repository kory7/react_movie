import React from "react";
import PropTypes from "prop-types";
const Poster = props => {
  return (
    <div>
      <img src={props.poster} alt="Poster" />
    </div>
  );
};

Poster.propTypes = {
  poster: PropTypes.string.isRequired
};
export default Poster;
