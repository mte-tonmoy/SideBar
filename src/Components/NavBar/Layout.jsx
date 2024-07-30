import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavBar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <NavBar isCollapsed={isCollapsed} toggleNavBar={toggleNavBar} />
      <div
        className={`flex flex-col w-full transition-all duration-500 ${
          isCollapsed ? "ml-16" : "ml-56"
        }`}
      >
        <Header />
        <div className="flex-grow p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
