import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

// login form
const Login = () => {
  // context API
  const {
    signInUsingGoogle,
    loginWithEmailAndPassword,
    createNewUser,
    setUserName,
    login,
    setLogin,
  } = useAuth();

  // use state hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // name field click handler
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  // email field click handler
  const handleGetEmail = (e) => {
    setEmail(e.target.value);
  };

  // password field click handler
  const handleGetPassword = (e) => {
    setPassword(e.target.value);
  };

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // password checker regular expression
    if (password.length < 8) {
      return setError("Minimum 8 characters!");
    } else {
      setError("");
    }
    if (password.length > 20) {
      return setError("Maximum 20 characters!");
    } else {
      setError("");
    }
    if (password.search(/[A-Z]/) < 0) {
      return setError("At least one uppercase character!");
    } else {
      setError("");
    }
    if (password.search(/[a-z]/) < 0) {
      return setError("At least one lowercase character!");
    } else {
      setError("");
    }
    if (password.search(/[0-9]/) < 0) {
      return setError("At least one digit!");
    } else {
      setError("");
    }
    if (password.search(/[!@#\$%\^&\*_]/) < 0) {
      return setError("At least one special character!");
    } else {
      setError("");
    }
    login
      ? loginWithEmailAndPassword(email, password)
      : createNewUser(email, password);

    // email-password register
    createNewUser()
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        history.push(redirect_url);
      });

    // email-password login
    loginWithEmailAndPassword(email, password)
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        history.push(redirect_url);
      });
  };

  // toggle function
  const toggleLogin = (e) => {
    setLogin(e.target.checked);
  };

  // use location and use history for fixing the redirect url
  const location = useLocation();
  const history = useHistory();
  // show the location page after loading
  const redirect_url = location.state?.from || "/";

  // google sign in
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        history.push(redirect_url);
      })
      .finally(() => history.push(redirect_url));
  };

  // created a form for register or login
  return (
    <div className="form-box mx-auto">
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <h2>Please {login ? "Login" : "Register"}</h2>
          {!login && (
            <input
              onBlur={handleUserName}
              type="text"
              placeholder="Your full name (English)"
              required
            />
          )}
          <input
            onBlur={handleGetEmail}
            type="email"
            placeholder="Write your email"
            required
          />
          <input
            onBlur={handleGetPassword}
            type="password"
            placeholder="Write your password"
            required
          />
          <p className="text-danger">{error}</p>
          <input
            className="btn btn-dark"
            type="submit"
            value={login ? "Login" : "Register"}
          />
          <div className="form-check check-box-custom">
            <input
              onChange={toggleLogin}
              className="form-check-input mb-1"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label
              className="form-check-label mt-4 mx-3"
              htmlFor="flexCheckChecked"
            >
              {!login ? "Already Registered?" : "Please Uncheck To Register!"}
            </label>
          </div>
        </form>
      </div>
      <br />
      <div>----------or----------</div>
      <br />
      <div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-danger google-sign-in"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
