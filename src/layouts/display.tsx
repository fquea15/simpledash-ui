import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const DisplayMain: React.FC = () => {
  return <div className=" w-full flex-1">
    <Header />
    <Outlet />
  </div>;
};

export default DisplayMain;
