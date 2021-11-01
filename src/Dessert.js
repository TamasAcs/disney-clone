import React from "react";
import { Link } from "react-router-dom";
import "./Dessert.css";
import { useSelector } from "react-redux";
import { selectDessert } from "./features/cake/cakeSlice";

function Originals() {
  const cakes = useSelector(selectDessert);

  return (
    <div className="originals">
      <h3>Dessert</h3>
      <div className="originals__row">
        {cakes &&
          cakes.map((cake, key) => (
            <div className="originals__card" key={key}>
              <Link to={`/detail/` + cake.id}>
                <img
                  className="originals__image"
                  src={cake.cardImg}
                  alt={cake.title}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Originals;
