import React from "react";
import Header from "./Header";
import "./Home.css";
import Slider from "./ImgSlider";
import Suggested from "./Suggested";
import Cakes from "./Cakes";
import Biscuit from "./Biscuits";
import Dessert from "./Dessert";
import Other from "./Other";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import db from "./firebase";
import { setCakes } from "./features/cake/cakeSlice";

function Home(props) {
  const dispatch = useDispatch();
  let cakes = [];
  let biscuits = [];
  let dessert = [];
  let other = [];

  useEffect(() => {
    db.collection("cakes").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            cakes = [...cakes, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            biscuits = [...biscuits, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            dessert = [...dessert, { id: doc.id, ...doc.data() }];
            break;
          case "other":
            other = [...other, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setCakes({
          cakes: cakes,
          biscuits: biscuits,
          dessert: dessert,
          other: other,
        })
      );
    });
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Slider />
        <Suggested />
        <Cakes />
        <Biscuit />
        <Dessert />
        <Other />
        
      </div>
    </div>
  );
}

export default Home;
