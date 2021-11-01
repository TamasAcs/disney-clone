import React from "react";
import { Link } from "react-router-dom";
import "./Cakes.css";
import { useSelector } from "react-redux";
import { selectCakes } from "./features/cake/cakeSlice";

function Recommended(props) {
  const cakes = useSelector(selectCakes);

  return (
    <div className="recommended">
      <h3>Cakes For You</h3>
      <div className="recommended__row">
      {cakes &&
          cakes.map((cake, key) => (
            <div className="recommended__card" key={key}>
              <Link to={`/detail/` + cake.id}>
                <img className="recommended__image" src={cake.cardImg} alt={cake.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Recommended;
