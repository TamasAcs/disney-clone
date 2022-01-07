import React from "react";
import { Link } from "react-router-dom";
import "./Dessert.css";
import { useSelector } from "react-redux";
import { selectDessert } from "./features/cake/cakeSlice";

function Dessert() {
  const cakes = useSelector(selectDessert);

  return (
    <div className="dessert">
      <p>Dessert</p>
      <div className="dessert__row">
        {cakes &&
          cakes.map((cake, key) => (
            <div className="dessert__card" key={key}>
              <Link to={`/detail/` + cake.id}>
                <img
                  className="dessert__image"
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

export default Dessert;
