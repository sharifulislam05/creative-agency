import React from "react";

const OrderListCard = ({ order }) => {
  const { title, image, description, status } = order;
  return (
    <div className="col-10 col-md-5 mr-0 mr-md-5 mb-4 shadow order-list__card">
      <div className="d-flex justify-content-between order-list__header mb-3">
        <img
          src={`data:image/png;base64, ${image.img}`}
          alt=""
          className="img-fluid"
          style={{ height: "60px" }}
        />
        <h5
          className={
            (status === "pending" && "bg-danger") ||
            (status === "done" && "bg-success") ||
            (status === "ongoing" && "bg-warning")
          }
        >
          {status}
        </h5>
      </div>
      <div>
        <h5>{title}</h5>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default OrderListCard;
