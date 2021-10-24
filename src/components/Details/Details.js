import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Details.css";

// single service page (private route)
const Details = () => {
  // context API used
  const { logout } = useAuth();
  // dynamic route use params
  const { serviceId } = useParams();
  // use state hook
  const [details, setDetails] = useState({});

  // data fetch with using find for special condition to get dynamically data getting
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((p) => p.id == serviceId);
        setDetails(p);
      });
  }, [serviceId]);
  return (
    <div style={{ marginTop: "90px" }}>
      <h1 className="text-primary w-75 mx-auto mb-4">
        Details About This Service
      </h1>
      <img className="w-50" src={details.image} alt="" />
      <h2 className="mt-3">{details.name}</h2>
      <p className="col-10 col-sm-10 col-md-6 mx-auto">{details.description}</p>
      <button onClick={logout} className="btn btn-primary mt-4 logout-button">
        Logout
      </button>
    </div>
  );
};

export default Details;
