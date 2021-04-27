import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";
import { useSelector } from "react-redux";
import { selectTrending } from "./features/movie/movieSlice";

function Trending() {
  const movies = useSelector(selectTrending);

  return (
    <div className="trending">
      <h3>Trending</h3>
      <div className="trending__row">
        {/* {movies &&
          movies.map((movie, key) => (
            <div className="trending__card"  key={key}>
              <Link to={"/detail" + movie.id}>
                <img className="trending__image" src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))} */}

        <div className="trending__card">
          <Link to="/detail/qHiMddGLPh4iz7DoDkqL">
            <img
              className="trending__image"
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt="Tangled"
            />
          </Link>
        </div>
        <div className="trending__card">
          <Link to="/detail/NnpC6rI6G4VzQ32eAowC">
            <img
              className="trending__image"
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt="Moana"
            />
          </Link>
        </div>
        <div className="trending__card">
          <Link to="/detail/XwmLQgduvzsyJJ96J3Ps">
            <img
              className="trending__image"
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt="The Simpsons"
            />
          </Link>
        </div>
        <div className="trending__card">
          <Link to="/detail/fLv4fvrKSXCwTzq9llB7">
            <img
              className="trending__image"
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/509E4D9F0BF98A9DC4CDD38954380782F6AB2664E503CC7652A37D18D06666BF/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt="Mickey Mouse"
            />
          </Link>
              </div>
              


      </div>
    </div>
  );
}

export default Trending;
