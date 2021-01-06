import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../../assets/images/logos/logo.png";
import { UserContext } from "../../../../App";
import ServiceListAdmin from "../ServiceListAdmin/ServiceListAdmin";
import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import {
  faTaxi,
  faPlus,
  faUserPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const DashboardAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [listItem, setListItem] = useState("service-list");

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
            <img src={logo} alt="" className="" />
          </Link>
        </div>
        <div className="col-7 col-md-10 mt-3 mb-5">
          <div className="d-flex justify-content-between">
            {listItem === "service-list" && <h4>Service List</h4>}
            {listItem === "add-service" && <h4>Add Service</h4>}
            {listItem === "make-admin" && <h4>Make Admin</h4>}
            <h5 className="mr-0 mr-md-5">{loggedInUser.name}</h5>
          </div>
        </div>
      </div>
      <div className="row p-0 m-0">
        <aside className="col-5 col-md-2">
          <ul className="list-unstyled brand-sidebar ml-3">
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
              onClick={() => hasToggle("add-service")}
              className={
                listItem === "add-service" ? "text-success" : "text-black"
              }
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Service
            </li>
            <li
              onClick={() => hasToggle("make-admin")}
              className={
                listItem === "make-admin" ? "text-success" : "text-black"
              }
            >
              <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
              Make Admin
            </li>
            <li className="mt-5 text-danger" onClick={handleSignOut}>
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              <span>signOut</span>
            </li>
          </ul>
        </aside>
        <main className="col-7 col-md-10">
          {listItem === "service-list" && <ServiceListAdmin />}
          {listItem === "add-service" && <AddService />}
          {listItem === "make-admin" && <MakeAdmin />}
        </main>
      </div>
    </>
  );
};

export default DashboardAdmin;
