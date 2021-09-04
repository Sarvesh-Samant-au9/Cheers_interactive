import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ data }) => {
  return data.length > 0 ? (
    <>
      <div className="row">
        {data.map((ele) => (
          <div className="col-12 col-md-3 mt-3 mb-2" key={ele.id}>
            <MovieCard data={ele} />
          </div>
        ))}
      </div>
    </>
  ) : null;
};

export default MovieList;
