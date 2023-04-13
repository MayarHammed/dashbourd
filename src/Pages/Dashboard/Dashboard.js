import React from "react";
import "./Dashbord.css";
import Top from "../../Components/TopBar/Top";
import SidBar from "../../Components/SidBar/SidBar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Top />
      <SidBar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
