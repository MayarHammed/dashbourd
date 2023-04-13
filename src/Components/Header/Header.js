import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="continer">
      <div className="header">
        <Link className="btn" to="/">
          Home
        </Link>

        <Link to="/Register" className="register">
          Register
        </Link>
        <Link to="/Login" className="login">
          Login
        </Link>
        <Link to="/dashboard" className="login">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Header;
