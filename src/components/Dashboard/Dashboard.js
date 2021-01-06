import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import DashboardAdmin from "./Admin/DashboardAdmin/DashboardAdmin";
import DashboardClient from "./Customer/DashboardClient/DashboardClient";

const Dashboard = () => {
  const [admin, setAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  //check admin for dashboard
  useEffect(() => {
    getAdmin();
  }, [loggedInUser.email]);
  const getAdmin = async () => {
    try {
      const isAdmin = await axios.post(
        "https://hidden-reef-35912.herokuapp.com/isAdmin",
        {
          email: loggedInUser.email,
        }
      );
      if (isAdmin.data.length) {
        setAdmin(true);
      }
    } catch (err) {
      console.log("enter valid email");
    }
  };

  return <div>{!admin ? <DashboardClient /> : <DashboardAdmin />}</div>;
};

export default Dashboard;
