import React from "react";
import { Link } from "react-router-dom";
import "./Default.css";

function Default() {
  return (
    <div className="container">
      <h2>
        Welcome to <span style={{ color: "#ea4247" }}>GeoEncryption</span>
      </h2>
      <div>
        <Link to="/encrypt">
          <button className="button">Encrypt</button>
        </Link>
        <Link to="/decrypt">
          <button className="button">Decrypt</button>
        </Link>
      </div>
    </div>
  );
}

export default Default;
