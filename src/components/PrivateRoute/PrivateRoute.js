import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

// private route setup
const PrivateRoute = ({ children, ...rest }) => {
  // context API call
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  // private route return
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
