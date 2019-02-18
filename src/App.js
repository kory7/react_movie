import React, { Component } from "react";
import "./App.css";
import Movie from "./components/Movie";

class App extends Component {
  //componentWillMount() -> render() -> componentDidMount()
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Spiderman",
            poster:
              "https://1.bp.blogspot.com/-UWDrl_LYNDQ/WVw8_2PHkKI/AAAAAAAARNw/5C2qVFhh4jMdNKIZoFziC2PKc-Twha6bQCLcBGAs/s1600/spider_man_homecoming_poster__2017__by_nomada_warrior-davwt5l.jpg"
          },
          {
            title: "Baby driver",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_.jpg"
          }
        ]
      });
    }, 5000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, i) => (
      <Movie title={movie.title} poster={movie.poster} key={i} />
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
