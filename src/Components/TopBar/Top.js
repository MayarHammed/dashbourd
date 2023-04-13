import React from "react";
import { Link } from "react-router-dom";
import "./Top.css";

function Top() {
  return (

      <div className="d-flex continer">
        <div className="text">
          <h3>Story</h3>
        </div>
        <div className="link">
          <Link to="/" className="btn-link"> Go To web site </Link>
        </div>
      </div>
    
  );
}

export default Top;
