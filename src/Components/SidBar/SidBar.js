import React from "react";
import "./SidBar.css";
import { NavLink } from "react-router-dom";

function SidBar() {
  return (
    <div className="sidbar">
    <NavLink activeclassName="active" to="/dashboard/Users" className="btn-sidbar"> <i class='fas fa-user-alt'></i> User </NavLink>
    <NavLink activeclassName="active" to="/dashboard/User/create" className="btn-sidbar"> <i class='fas fa-user-plus' ></i> New User </NavLink>
    </div>
  );
}

export default SidBar;
