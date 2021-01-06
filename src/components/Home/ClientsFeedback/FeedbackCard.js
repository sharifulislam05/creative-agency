import React from "react";
import "./_feedbacks.scss";

const FeedbackCard = ({ client }) => {
  const { name, designation, quote, img } = client;
  return (
    <div className="feedback-card  border m-3 p-3">
      <div className="d-flex mb-3">
        <img src={img} alt="" />
        <div className="feedback-card__header text-justify">
          <h3>{name}</h3>
          <p>{designation}</p>
        </div>
      </div>
      <div className="text-justify feedback-card__body">
        <p>{quote}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
