import React from "react";
import Header from "./Header";
import "./Home.css";
import Slider from "./ImgSlider";
import Recommended from "./Recommended";
import Suggested from "./Suggested";
import NewDisney from "./NewDisney";
import Trending from "./Trending";
import Originals from "./Originals";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "./firebase";
import { setMovies } from "./features/movie/movieSlice";
import { selectUserName } from "./features/userSlice";

function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Slider />
        <Suggested />
        <Recommended />
        <NewDisney />
        <Trending />
        <Originals />
      </div>
    </div>
  );
}

export default Home;
