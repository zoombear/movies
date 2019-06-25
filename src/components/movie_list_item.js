import React from "react";
import './style.css';


const MovieListItem = ({ movie, onMovieSelect }) => {
  const imageUrl = 'http://image.tmdb.org/t/p/w185//' + movie.poster_path;
  // console.log("movie", movie)

  return (
    <li onClick={() => onMovieSelect(movie)} className="list-group-item">
      <div className="movie-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
          <div className="media-heading">Rating: {movie.vote_average}</div>
        </div>
      </div>
    </li>
  );
};

export default MovieListItem;
