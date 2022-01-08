import React, { useEffect, useState } from "react";
import "./Detail.css";
import Header from "./Header";
import { useParams, useHistory } from "react-router";
import db from "./firebase";
import bg from "./images/detail-background.webp";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Detail(props) {
  const history = useHistory();
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
          <img src={bg} alt="" />
        </div>
        <div className="detail__main__description">
          <div className="detail__imageTitle">
            <img src={detailData.titleImg} alt={detailData.title} />
          </div>
          <div className="detail__main__description__right">
          <div className="detail__title">{detailData.title}</div>
            <div className="detail__subTitle">{detailData.subTitle}</div>
            <div className="detail__price">
              <p>FROM &nbsp;</p>
            <div className="detail__price__amount">{detailData.price}</div>
            </div>
            <div className="detail__description">{detailData.description}</div>
            <p className="detail__allergy__p">Allergen Information:</p>
            <div className="detail__allergy">{detailData.allergy}</div>
            <div className="detail__content">
                
                <div className="detail__contact">
                  <div className="detail__contact__btn" onClick={() => history.push("/contact")}>
                    <MailOutlineIcon/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
