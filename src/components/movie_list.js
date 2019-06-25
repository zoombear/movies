import React from "react";
import MovieListItem from "./movie_list_item";
import './style.css';


const MovieList = props => {
  const movieItems = props.movies.map(movie => {
    console.log(movie)
    return (
      <MovieListItem
        onMovieSelect={props.onMovieSelect}
        key={movie.id}  // todo
        movie={movie}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {movieItems}
    </ul>
  );
};

export default MovieList;
