import React from "react";
import { Link } from "react-router-dom";
import "./Cakes.css";
import { useSelector } from "react-redux";
import { selectCakes } from "./features/cake/cakeSlice";

function Cakes(props) {
  const cakes = useSelector(selectCakes);

  return (
    <div className="cakes">
      <p>Cakes</p>
      <div className="cakes__row">
        {cakes &&
          cakes.map((cake, key) => (
            <div className="cakes__card" key={key}>
              <Link to={`/detail/` + cake.id}>
                <img
                  className="cakes__image"
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

export default Cakes;
