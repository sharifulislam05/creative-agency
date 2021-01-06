import React, { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import "./_feedbacks.scss";
import axios from "axios";
import Loader from "react-loader-spinner";

const ClientsFeedback = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //get all reviews from database
  useEffect(() => {
    getReviews();
  }, []);
  const getReviews = async () => {
    try {
      const getData = await axios.get("https://hidden-reef-35912.herokuapp.com/reviews");
      setClients(getData.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.status);
    }
  };

  return (
    <section className="container feedback-container">
      <div className="feedbacks__header text-center">
        <h3>
          Clients <span className="brand-text">Feedback</span>
        </h3>
      </div>
      <div className="d-flex flex-wrap feedback">
        {isLoading && (
          <Loader type="Bars" color="#171b4e" className="brand-loading" />
        )}
        {clients.map((client) => (
          <FeedbackCard client={client} key={client._id} />
        ))}
      </div>
    </section>
  );
};

export default ClientsFeedback;
