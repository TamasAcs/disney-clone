import React, { useEffect, useState } from "react";
import "./Detail.css";
import Header from "./Header";
import playBlack from "./images/play-icon-black.png";
import playWhite from "./images/play-icon-white.png";
import groupIcon from "./images/group-icon.png";
import { useParams } from "react-router";
import db from "./firebase";

function Detail(props) {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("cakes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <div className="detail">
      <Header />
      <div className="detail__body">
        <div className="detail__background">
          <img src={detailData.backgroundImg} alt={detailData.title} />
        </div>
        <div className="detail__imageTitle">
          <img src={detailData.titleImg} alt={detailData.title} />
        </div>

        <div className="detail__content">
          <div className="detail__controls">
            <div className="detail__player">
              <img src={playBlack} alt="" />
              <h4>PLAY</h4>
            </div>
            <div className="detail__trailer">
              <img src={playWhite} alt="" />
              <h4>TRAILER</h4>
            </div>
            <div className="detail__add">
              <span></span>
              <span></span>
            </div>
            <div className="detail__group">
              <div className="detail__groupCircle">
                <img src={groupIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="detail__subTitle">{detailData.subTitle}</div>
          <div className="detail__description">{detailData.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
