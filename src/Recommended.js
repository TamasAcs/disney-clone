import React from "react";
import { Link } from "react-router-dom";
import "./Recommended.css";
import { useSelector } from "react-redux";
import { selectRecommend } from "./features/movie/movieSlice";

function Recommended(props) {
  const movies = useSelector(selectRecommend);

  return (
    <div className="recommended">
      <h3>Recommended For You</h3>
      <div className="recommended__row">
      {movies &&
          movies.map((movie, key) => (
            <div className="recommended__card" key={key}>
              <Link to={`/detail/` + movie.id}>
                <img className="recommended__image" src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Recommended;
