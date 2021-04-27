import React from 'react'
import { Link } from 'react-router-dom'
import "./NewDisney.css"
import { useSelector } from "react-redux";
import { selectNewDisney } from "./features/movie/movieSlice";

function NewDisney() {
    const movies = useSelector(selectNewDisney);


    return (
        <div className="newDisney">
            <h3>New To Disney</h3>
            <div className="newDisney__row">
            {movies &&
          movies.map((movie, key) => (
            <div className="newDisney__card"  key={key}>
              <Link to={`/detail/` + movie.id}>
                <img className="newDisney__image" src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
            </div>
        </div>
    )
}

export default NewDisney
