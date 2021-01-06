import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import ServicesTable from "./ServicesTable";

const ServiceListAdmin = () => {
  const [services, setServices] = useState([]);
  const [loadPage, setLoadPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  //get all order service list from database
  useEffect(() => {
    getServiceList();
  }, [loadPage]);
  const getServiceList = async () => {
    try {
      const getData = await axios.get("https://hidden-reef-35912.herokuapp.com/serviceList");
      setServices(getData.data);
      setIsLoading(false);
    } catch (err) {
      toast.error(err.status);
    }
  };
  //order service status update by admin
  const handleStatus = (id, e) => {
    fetch(`https://hidden-reef-35912.herokuapp.com/orderStatus/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: e.target.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setLoadPage(!loadPage);
          toast.success("update order status");
        }
      });
  };

  return (
    <div className="table-responsive-md service-list__main">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Services</th>
            <th scope="col">Description</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        {isLoading && <Loader type="ThreeDots" color="#171b4e" />}
        {services.map((service, index) => (
          <ServicesTable
            service={service}
            index={index}
            key={service._id}
            handleStatus={handleStatus}
          />
        ))}
      </table>
      <ToastContainer />
    </div>
  );
};

export default ServiceListAdmin;
