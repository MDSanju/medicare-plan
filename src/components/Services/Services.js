import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

// home page all services
const Services = () => {
  // use state hook
  const [services, setServices] = useState([]);
  console.log(services);

  // call data by doing fetch
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // data applied
  return (
    <div className="services-container">
      <h1 className="fw-bolder mb-4 text-primary">Our Services</h1>
      <div className="row row-cols-1 row-cols-md-3 mx-0 g-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
