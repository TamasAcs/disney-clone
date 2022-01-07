import React from "react";
import { Link } from "react-router-dom";
import "./Other.css";
import { useSelector } from "react-redux";
import { selectOther } from "./features/cake/cakeSlice";

function Other() {
  const cakes = useSelector(selectOther);

  return (
    <div className="other">
      <p>Other</p>
      <div className="other__row">
        {cakes &&
          cakes.map((cake, key) => (
            <div className="other__card" key={key}>
              <Link to={`/detail/` + cake.id}>
                <img
                  className="other__image"
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

export default Other;
