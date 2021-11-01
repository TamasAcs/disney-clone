import React from "react";
import { Link } from "react-router-dom";
import "./Other.css";
import { useSelector } from "react-redux";
import { selectOther } from "./features/cake/cakeSlice";

function Trending() {
  const cakes = useSelector(selectOther);

  return (
    <div className="trending">
      <h3>Other</h3>
      <div className="trending__row">
        {cakes &&
          cakes.map((cake, key) => (
            <div className="trending__card" key={key}>
              <Link to={`/detail/` + cake.id}>
                <img
                  className="trending__image"
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

export default Trending;
