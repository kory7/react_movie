import React from "react";
import Poster from "./Poster";
import PropTypes from "prop-types";
import Genres from "./Genres";
const Movie = ({ poster, title, genres, synopsis }) => {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <Poster poster={poster} alt={title} />
      </div>
      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => (
            <Genres genre={genre} key={index} />
          ))}
        </div>
        <p className="Movie_Synopsis">{synopsis}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};
export default Movie;
