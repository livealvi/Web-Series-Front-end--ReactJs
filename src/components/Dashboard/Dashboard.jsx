import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <Link to="/users">User</Link>
    </>
  );
};

export default Dashboard;
