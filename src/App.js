import React, { Component } from "react";
import "./App.css";
import Movie from "./components/Movie";

class App extends Component {
  //componentWillMount() -> render() -> componentDidMount()
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=like_count")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => (
      <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}
      />
    ));
    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
