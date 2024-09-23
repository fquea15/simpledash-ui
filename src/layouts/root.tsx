import Sidebar from "@/components/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutRoot: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default LayoutRoot;
