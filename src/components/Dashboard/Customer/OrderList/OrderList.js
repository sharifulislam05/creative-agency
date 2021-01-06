import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { UserContext } from "../../../../App";
import OrderListCard from "./OrderListCard";
import "./_orderList.scss";

const OrderList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //get all orders for specified user by email
  useEffect(() => {
    getOrderList();
  }, []);
  const getOrderList = async () => {
    try {
      const getData = await axios.get(
        "https://hidden-reef-35912.herokuapp.com/orders?email=" + loggedInUser.email
      );
      setOrders(getData.data);
      setIsLoading(false)
    } catch (err) {
      console.log(err.status);
    }
  };

  return (
    <div className="order-list__main">
       {isLoading && <Loader type="Bars" color="#171b4e" />}
      <div className="row">
        {orders.map((order) => (
          <OrderListCard order={order} key={order._id} />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
