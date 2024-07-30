// import React, { useState } from "react";
// import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
// import { FaSuitcase } from "react-icons/fa";
// import { TbUsers } from "react-icons/tb";
// import { MdMenu } from "react-icons/md";
// import { MdAccountCircle } from "react-icons/md";
// import { FaPowerOff } from "react-icons/fa";

// import { LuChevronFirst } from "react-icons/lu"; // Add icons for the toggle button
// import { Link } from "react-router-dom";

// const NavBar = ({ isCollapsed, toggleNavBar }) => {
//   const [activeLink, setActiveLink] = useState(0);

//   const handleLinkClick = (index) => {
//     setActiveLink(index);
//   };

//   const SIDEBAR_LINKS = [
//     { id: 1, path: "/", name: "Dashboard", icon: LuBox },
//     { id: 2, path: "/members", name: "Members", icon: TbUsers },
//     { id: 3, path: "/messages", name: "Messages", icon: LuMessageSquare },
//     { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
//     { id: 5, path: "/clients", name: "Clients", icon: LuUser },
//     { id: 6, path: "/work", name: "Work Plan", icon: LuCalendar },
//   ];

//   return (
//     <div
//       className={`fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-gray-800 text-white ${
//         isCollapsed ? "w-16" : "w-56"
//       } transition-width duration-300`}
//     >
//       <div className="mb-8 text-white flex justify-center md:justify-start items-center">
//         <img
//           src="/src/assets/logo.png"
//           alt="logo"
//           className={`w-32 ${isCollapsed ? "hidden" : "flex"}`}
//         />
//         <button
//           className="absolute right-4 cursor-pointer text-white"
//           onClick={toggleNavBar}
//         >
//           {isCollapsed ? <MdMenu size={24} /> : <LuChevronFirst size={24} />}
//         </button>
//       </div>

//       <ul className="mt-6 space-y-6">
//         {SIDEBAR_LINKS.map((link, index) => (
//           <li
//             key={index}
//             className={`relative flex items-center py-2 px-2 my-1 font-medium rounded-md cursor-pointer hover:bg-gray-100 hover:text-indigo-500 ${
//               activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
//             }`}
//           >
//             <Link
//               to={link.path}
//               className="flex justify-center md:justify-start items-center md:space-x-5"
//               onClick={() => handleLinkClick(index)}
//             >
//               <span>{link.icon()}</span>
//               <span
//                 className={`text-sm text-gray-500 ${
//                   isCollapsed ? "hidden" : "hidden md:flex"
//                 }`}
//               >
//                 {link.name}
//               </span>
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center flex">
//       <MdAccountCircle />
//         <div
//           className={`w-32 mx-3 justify-between ${
//             isCollapsed ? "hidden" : "flex"
//           }`}
//         >
//           <div className="leading-4 text-left">
//             <h4 className="font-semibold text-white">John Doe</h4>
//             <span className="text-xs text-gray-300">johndoe@gmail.com</span>
//           </div>
//         </div>
//         <FaPowerOff size={32} className="cursor-pointer hover:text-red-500 " />
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { MdMenu, MdAccountCircle } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { LuChevronFirst } from "react-icons/lu";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = ({ isCollapsed, toggleNavBar }) => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/members", name: "Members", icon: TbUsers },
    { id: 3, path: "/messages", name: "Messages", icon: LuMessageSquare },
    { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
    { id: 5, path: "/clients", name: "Clients", icon: LuUser },
    { id: 6, path: "/work", name: "Work Plan", icon: LuCalendar },
  ];

  return (
    <div
      className={`fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-gray-800 text-white ${
        isCollapsed ? "w-16" : "w-56"
      } transition-width duration-300`}
    >
      <div className="mb-8 text-white flex justify-center md:justify-start items-center">
        <img
          src="/src/assets/logo.png"
          alt="logo"
          className={`w-32 ${isCollapsed ? "hidden" : "flex"}`}
        />
        <button
          className="absolute right-4 cursor-pointer text-white"
          onClick={toggleNavBar}
        >
          {isCollapsed ? <MdMenu size={24} /> : <LuChevronFirst size={24} />}
        </button>
      </div>

      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`relative flex items-center py-2 px-2 my-1 font-medium rounded-md cursor-pointer hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span
                className={`text-sm text-gray-500 ${
                  isCollapsed ? "hidden" : "hidden md:flex"
                }`}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer flex items-center ">
        <MdAccountCircle size={28} className="text-indigo-300" />
        {!isCollapsed && (
          <div className="ml-3 leading-4 text-left">
            <h4 className="text-xs font-semibold text-white">Toufique Tonmoy</h4>
            <span className="text-xs text-gray-300">tonmoy@gmail.com</span>
          </div>
        )}

        {!isCollapsed && <FaPowerOff size={20} className="ml-3 text-red-500" />}
      </div>
    </div>
  );
};

export default NavBar;
