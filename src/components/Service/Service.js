import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

// home page service card design
const Service = (props) => {
  const { id, name, image, description } = props.service;
  return (
    <div className="col">
      <div className="card card-custom">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title mt-3">{name}</h3>
          <p className="card-text mt-3">{description}</p>
          <Link to={`/details/${id}`}>
            <button className="btn btn-warning mt-3">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
