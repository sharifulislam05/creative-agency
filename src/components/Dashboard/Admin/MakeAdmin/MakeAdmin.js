import axios from "axios";
import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./_makeAdmin.scss";

const MakeAdmin = () => {
  const inputEl = useRef();
  //post add-admin to database
  const handleAddAdmin = () => {
    const email = inputEl.current.value;
    axios
      .post("https://hidden-reef-35912.herokuapp.com/addAdmin", { email })
      .then((res) => {
        if (res.data) {
          toast.success("admin added successfully");
          inputEl.current.value = "";
        }
      })
      .catch((err) => toast.error(err.status));
  };

  return (
    <div className="makeAdmin__main">
      <input
        type="email"
        placeholder="Email"
        ref={inputEl}
        name="email"
        className="makeAdmin__input"
      />
      <button onClick={handleAddAdmin} className="btn btn-success">
        Add admin
      </button>
      <ToastContainer />
    </div>
  );
};

export default MakeAdmin;
