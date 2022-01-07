import React from "react";
import { Link } from "react-router-dom";
import "./Biscuits.css";
import { useSelector } from "react-redux";
import { selectBiscuit } from "./features/cake/cakeSlice";

function Biscuit() {
  const cakes = useSelector(selectBiscuit);

  return (
    <div className="biscuit">
      <p>Biscuit</p>
      <div className="biscuit__row">
        {cakes &&
          cakes.map((cake, key) => (
            <div className="biscuit__card" key={key}>
              <Link to={`/detail/` + cake.id}>
                <img
                  className="biscuit__image"
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

export default Biscuit;
