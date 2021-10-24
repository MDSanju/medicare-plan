import React from "react";
import error404 from "../../images/404-error/error.png";

// 404 Error Page (NO result found)
const NoMatch = () => {
  return (
    <div className="mt-5">
      <img src={error404} alt="" />
    </div>
  );
};

export default NoMatch;
