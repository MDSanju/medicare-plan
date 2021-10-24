import React from "react";
import payment from "../../images/payment/payment-getway.jpg";
import "./Footer.css";

// footer
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container mb-5 footer-items">
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-12 col-sm-6 col-md-3">
            <span className="navbar-brand text-warning fw-bold fs-3">
              Medicare Plan
            </span>
            <p className="mt-4">Address: 59 Street, 1200 Techpark</p>
            <p>Phone: +59888555</p>
            <p>Email: example@gmail.com</p>
            <div></div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h4>Departments</h4>
            <p className="mt-4">Our Mission</p>
            <p>Awards</p>
            <p>Experience</p>
            <p>Success Story</p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 open-time">
            <h4>Opening Hours</h4>
            <p className="mt-4">Monday to Friday</p>
            <p>Time: 09:00 am - 10.00 pm</p>
            <p>Saturday and Sunday Closed</p>
          </div>
          <div
            style={{ textAlign: "left" }}
            className="col-12 col-sm-6 col-md-3"
          >
            <small style={{ fontSize: "18px" }} className="fw-bold">
              Choose your payment method:
            </small>
            <img
              style={{
                width: "285px",
                borderRadius: "4px",
                marginTop: "7px",
                cursor: "pointer",
              }}
              src={payment}
              alt=""
            />
          </div>
        </div>
      </div>
      <p
        className="fw-bold"
        style={{
          fontSize: "16px",
          marginTop: "5px",
          color: "rgb(255 255 255 / 52%)",
        }}
      >
        Copyright © 2021 medicare-plan.com
      </p>
    </div>
  );
};

export default Footer;
