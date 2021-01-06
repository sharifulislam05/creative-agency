import "./App.scss";
import Home from "./components/Home/Home/Home";
import OAuth from "./components/OAuth/OAuth/OAuth";
import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import PrivateRoute from "./components/OAuth/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/OAuth/NotFound/NotFound";
export const UserContext = createContext();

function App() {
  const isLogin = () => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      return { name: "", email: "", img: "" };
    } else {
      const decoded = jwt_decode(token);
      const user = {
        name: decoded.name,
        email: decoded.email,
        img: decoded.picture,
      };
      return user;
    }
  };
  const [loggedInUser, setLoggedInUser] = useState(isLogin());

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <OAuth />
          </Route>
          <PrivateRoute path="/dashboard/:serviceId">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
