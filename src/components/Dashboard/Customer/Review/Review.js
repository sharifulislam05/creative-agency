import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../App";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();
  //post review to server
  const onSubmit = (data) => {
    data.img = loggedInUser.img;
    axios
      .post("https://hidden-reef-35912.herokuapp.com/addReview", data)
      .then((res) => {
        if (res.data) {
          toast.success("review added successfully");
          document.getElementById("review-form").reset();
        }
      })
      .catch((err) => toast.error("Order failed please try again"));
  };

  return (
    <section className="review__main">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column brand__form"
        id="review-form"
      >
        <input
          type="text"
          name="name"
          ref={register}
          placeholder="Enter your Name"
        />
        <input
          type="text"
          name="designation"
          ref={register({ required: true })}
          placeholder="Company’s name, Designation"
        />
        {errors.designation && (
          <span className="text-danger">Designation is required</span>
        )}
        <input type="text" name="quote" ref={register} placeholder="quote" />
        <input type="submit" className="brand-btn" />
      </form>
      <ToastContainer />
    </section>
  );
};

export default Review;
