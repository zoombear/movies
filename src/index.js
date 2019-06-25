import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import MovieList from "./components/movie_list";
import MovieDetail from "./components/movie_detail";
const API_KEY = "50bb8cc380100c5ea082ad86e775e26b";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      selectedMovie: null
    };

    this.movieSearch("cats");
  }

  sortMovies(list) {
    return list.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)
  }

  movieSearch(term) {
    console.log(term)
    if (!term) {
      term = "meow";
    }
    fetch('https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&language=en-US&page=1&include_adult=false&query=' + term)
      .then(response => response.json())
      .then(data => this.setState({movies: this.sortMovies(data.results), selectedMovie:data.results[0]}));
  }

  render() {
    const movieSearch = _.debounce(term => {
      this.movieSearch(term);
    }, 400);

    return (
      <div>
        <SearchBar onSearchTermChange={movieSearch} />
        <MovieDetail movie={this.state.selectedMovie} />
        <MovieList
          onMovieSelect={selectedMovie => this.setState({ selectedMovie })}
          movies={this.state.movies}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
