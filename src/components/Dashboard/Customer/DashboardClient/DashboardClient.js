import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../../assets/images/logos/logo.png";
import { UserContext } from "../../../../App";
import Order from "../Order/Order";
import OrderList from "../OrderList/OrderList";
import Review from "../Review/Review";
import {
  faShoppingCart,
  faTaxi,
  faCommentAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const DashboardClient = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [listItem, setListItem] = useState("order");

  const handleSignOut = () => {
    sessionStorage.removeItem("authToken");
    setLoggedInUser({});
  };

  const hasToggle = (item) => {
    setListItem(item);
  };

  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-5 col-sm-5 col-md-2 mt-3">
          <Link to="/home" style={{ position: "fixed" }}>
            {" "}
            <img src={logo} alt="" className="img-fluid" />
          </Link>
        </div>
        <div className="col-7 col-md-10 mt-3 mb-5">
          <div className="d-flex justify-content-between">
            {listItem === "order" && <h4>Order</h4>}
            {listItem === "service-list" && <h4>Service List</h4>}
            {listItem === "review" && <h4>Review</h4>}
            <h5 className="mr-0 mr-md-5">{loggedInUser.name}</h5>
          </div>
        </div>
      </div>
      <div className="row p-0 m-0">
        <aside className="col-5 col-md-2">
          <ul className="list-unstyled brand-sidebar ml-3">
            <li
              onClick={() => hasToggle("order")}
              className={listItem === "order" ? "text-success" : "text-black"}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Order
            </li>
            <li
              onClick={() => hasToggle("service-list")}
              className={
                listItem === "service-list" ? "text-success" : "text-black"
              }
            >
              <FontAwesomeIcon icon={faTaxi} className="mr-2" />
              Service List
            </li>
            <li
              onClick={() => hasToggle("review")}
              className={listItem === "review" ? "text-success" : "text-black"}
            >
              <FontAwesomeIcon icon={faCommentAlt} className="mr-2" />
              Reviews
            </li>
            <li className="mt-5 text-danger" onClick={handleSignOut}>
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              <span>signOut</span>
            </li>
          </ul>
        </aside>
        <main className="col-7 col-md-10">
          {listItem === "order" && <Order />}
          {listItem === "service-list" && <OrderList />}
          {listItem === "review" && <Review />}
        </main>
      </div>
    </>
  );
};

export default DashboardClient;
