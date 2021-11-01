import React from "react";
import { Link } from "react-router-dom";
import "./Biscuits.css";
import { useSelector } from "react-redux";
import { selectBiscuit } from "./features/cake/cakeSlice";

function NewDisney() {
  const cakes = useSelector(selectBiscuit);

  return (
    <div className="newDisney">
      <h3>Biscuit</h3>
      <div className="newDisney__row">
        {cakes &&
          cakes.map((cake, key) => (
            <div className="newDisney__card" key={key}>
              <Link to={`/detail/` + cake.id}>
                <img
                  className="newDisney__image"
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

export default NewDisney;
