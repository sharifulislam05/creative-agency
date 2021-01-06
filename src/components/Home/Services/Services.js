import React, { useEffect, useState } from "react";
import "./_services.scss";
import ServiceCard from "./ServiceCard";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

const Services = () => {
  const [services, setServices] = useState([]);
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  //get all service from database
  useEffect(() => {
    getServices();
  }, []);
  const getServices = async () => {
    try {
      const getData = await axios.get("https://hidden-reef-35912.herokuapp.com/getServices");
      setServices(getData.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.status);
    }
  };

  const handleOrderService = (id) => {
    history.push(`/dashboard/${id}`);
  };

  return (
    <section className="container">
      <div className="services-header mb-4">
        <h3>
          Provide awesome <span>services</span>{" "}
        </h3>
      </div>
      <div className="row">
        {isLoading && (
          <Loader type="Bars" color="#171b4e" className="brand-loading" />
        )}
        {services.map((service) => (
          <ServiceCard
            service={service}
            handleOrderService={handleOrderService}
            key={service._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
