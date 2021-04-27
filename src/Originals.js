import React from "react";
import { Link } from "react-router-dom";
import "./Originals.css";
import { useSelector } from "react-redux";
import { selectOriginal } from "./features/movie/movieSlice";

function Originals() {
  const movies = useSelector(selectOriginal);

  return (
    <div className="originals">
      <h3>Originals</h3>
      <div className="originals__row">
        {movies &&
          movies.map((movie, key) => (
            <div className="originals__card" key={key}>
              <Link to={`/detail/` + movie.id}>
                <img
                  className="originals__image"
                  src={movie.cardImg}
                  alt={movie.title}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Originals;
