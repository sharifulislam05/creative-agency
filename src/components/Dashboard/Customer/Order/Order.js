import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import uploadImage from "../../../../assets/images/Group.png";
import { UserContext } from "../../../../App";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Order = () => {
  const [file, setFile] = useState(null);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();
  const { serviceId } = useParams();
  const [service, setService] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  //post order to database
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("title", data.title);
    formData.append("status", "pending");
    fetch("https://hidden-reef-35912.herokuapp.com/addOrder", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Order added successfully");
          document.getElementById("order-form").reset();
        }
      })
      .catch((error) => {
        toast.error("Order failed please try again");
      });
  };
  //get service for input order-service
  useEffect(() => {
    getService();
  }, []);
  const getService = async () => {
    try {
      const getData = await axios.post("https://hidden-reef-35912.herokuapp.com/service", {
        serviceId,
      });
      setService(getData.data);
    } catch (err) {
      console.log(err.status);
    }
  };

  return (
    <section className="order__main">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column brand__form"
        id="order-form"
      >
        <input
          type="text"
          name="name"
          ref={register({ required: true })}
          placeholder="Enter your Name"
        />
        {errors.name && <span className="text-danger">Name is required</span>}
        <input
          type="email"
          name="email"
          defaultValue={loggedInUser.email}
          ref={register({ required: true })}
          placeholder="Enter your Email"
        />
        {errors.email && <span className="text-danger">Email is required</span>}
        <input
          type="text"
          name="title"
          defaultValue={service.title}
          ref={register({ required: true })}
          placeholder="Project"
        />
        {errors.title && (
          <span className="text-danger">Project title is required</span>
        )}
        <textarea
          name="description"
          rows="4"
          cols="10"
          ref={register({ required: true })}
          placeholder="Project details"
        />
        {errors.description && (
          <span className="text-danger">Project details is required</span>
        )}
        <div className="d-flex">
          <input
            type="number"
            name="price"
            ref={register({ required: true })}
            placeholder="Price"
            className="mr-3 w-50"
          />
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            ref={register}
            id="uploadImage"
            hidden
          />
          <label htmlFor="uploadImage" className="brand__file-label w-50">
            <div className="mt-2">
              {" "}
              <img src={uploadImage} alt="" className="mx-2" />{" "}
              <span>choose a photo</span>
            </div>
          </label>
        </div>
        <input type="submit" className="brand-btn" />
      </form>
      <ToastContainer />
    </section>
  );
};

export default Order;
