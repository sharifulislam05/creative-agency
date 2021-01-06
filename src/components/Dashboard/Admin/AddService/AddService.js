import React, { useState } from "react";
import uploadImage from "../../../../assets/images/Group.png";
import { toast, ToastContainer } from "react-toastify";

const AddService = () => {
  const [file, setFile] = useState(null);
  const [serviceInfo, setServiceInfo] = useState({});
  //form input change handler
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleChange = (e) => {
    const newService = { ...serviceInfo };
    newService[e.target.name] = e.target.value;
    setServiceInfo(newService);
  };
  //post service to database
  const handleAddServer = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", serviceInfo.title);
    formData.append("description", serviceInfo.description);
    fetch("https://hidden-reef-35912.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("service added successfully");
          document.getElementById("service-description").value = "";
          document.getElementById("service-title").value = "";
        }
      })
      .catch((error) => toast.error("Order failed please try again"));
  };

  return (
    <div className="add-service__main">
      <div className="row add-service__form">
        <div className="col-md-5 d-flex flex-column">
          <label htmlFor="service-title">Service Title</label>
          <input
            id="service-title"
            type="text"
            name="title"
            placeholder="Enter title"
            className="mb-3 h-25"
            onBlur={handleChange}
          />
          <label htmlFor="service-description">Description</label>
          <textarea
            id="service-description"
            name="description"
            rows="4"
            cols="10"
            placeholder="Enter Description"
            onBlur={handleChange}
          />
        </div>
        <div className="col-md-6 d-flex flex-column">
          <label htmlFor="uploadImage" className="mb-0">
            Icon
          </label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            id="uploadImage"
            hidden
          />
          <label htmlFor="uploadImage" className="brand__file-label">
            <div className="mt-2">
              {" "}
              <img src={uploadImage} alt="" className="mx-2" />{" "}
              <span>choose a photo</span>
            </div>
          </label>
        </div>
      </div>
      <div className="mt-5 mr-0 mr-md-5 d-flex justify-content-end">
        <input
          type="submit"
          className="btn btn-success "
          onClick={handleAddServer}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddService;
