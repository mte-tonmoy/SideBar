import React from "react";
import { GoBell } from "react-icons/go";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50">
      
      <div>
        <h1 className="text-xs">Welcome Back!</h1>
        <p className="text-xl font-semibold">Tonmoy</p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
