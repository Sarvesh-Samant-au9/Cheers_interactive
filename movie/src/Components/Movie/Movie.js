import React from "react";
import MovieList from "./MovieList/MovieList";

const Movie = ({ movieData }) => {
  return <MovieList data={movieData} />;
};

export default Movie;
