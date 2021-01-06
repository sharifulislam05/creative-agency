import React, { useContext, useEffect } from "react";
import "./_oauth.scss";
import logo from "../../../assets/images/logos/logo.png";
import gLogo from "../../../assets/images/logos/googleLogo.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../configs/firebase.config";
import { UserContext } from "../../../App";
import axios from "axios";
import { faGlassMartiniAlt } from "@fortawesome/free-solid-svg-icons";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const OAuth = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
        };
        storeAuthToken();
        setLoggedInUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        sessionStorage.setItem("authToken", idToken);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container oauth-container">
      <div className="text-center my-5">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="login-area d-flex justify-content-center align-items-center text-center">
          <div>
            <h5 className="font-weight-bold">Login With</h5>
            <button
              className="google-btn d-flex align-items-center"
              onClick={googleLogin}
            >
              <img src={gLogo} alt="" />
              <p className="m-auto">Continue with Google</p>
            </button>
            <small className="text-center">
              Don’t have an account?{" "}
              <span className="text-primary">Create an account</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OAuth;
