import React from "react";
import './style.css';


const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <div>Loading...</div>;
  }

  const imageUrl = 'http://image.tmdb.org/t/p/w185//' + movie.poster_path;

  return (
    <div className="movie-detail col-md-8">
      <div className="details">
        <h2>{movie.title}</h2>
        <img className="media-object" src={imageUrl} />
        <p>{movie.overview}</p>
        <div className="movie-facts"><span className="bold-type">Rating:</span> {movie.vote_average}</div>
        <div className="movie-facts"><span className="bold-type">Release Date:</span> {movie.release_date}</div>
      </div>
    </div>
  );
};

export default MovieDetail;
