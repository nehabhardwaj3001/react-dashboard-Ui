import React from "react";
import Sidebar from "./Sidebar.js";
import DashboardContent from "./DashboardContent.js";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
