import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../App";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const isLogin = () => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      return false;
    }
    const decoded = jwt_decode(token);
    const currentTime = new Date().getTime() / 1000;
    return decoded.exp > currentTime;
  };
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email || isLogin()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
