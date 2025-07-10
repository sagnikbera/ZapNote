import React from "react"; 
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";

function SideBar() {
  const navClass = ({ isActive }) =>
    `flex items-center gap-2 px-2 py-2 pl-6 transition-all duration-300
    ${isActive
      ? "bg-violet-800 rounded-tr-full rounded-br-full text-white font-semibold"
      : "hover:bg-violet-800 hover:rounded-tr-full hover:rounded-br-full hover:text-white font-semibold"
    }`;

  const iconClass = ({ isActive }) =>
    `flex flex-col items-center justify-center text-xl
     ${isActive ? "text-violet-800" : "text-gray-500"} hover:text-violet-800`;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside  className="hidden sm:flex flex-col gap-3 border-r-2 w-44 flex-shrink-0 h-screen p-3 pl-0">
        <NavLink to="/" className={navClass}>
          <FaHome />
          <span>Home</span>
        </NavLink>
        <NavLink to="/archive" className={navClass}>
          <IoMdArchive />
          <span>Archive</span>
        </NavLink>
        <NavLink to="/important" className={navClass}>
          <MdStars />
          <span>Important</span>
        </NavLink>
        <NavLink to="/bin" className={navClass}>
          <IoTrashBinSharp />
          <span>Bin</span>
        </NavLink>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-yellow-200 border-t shadow-md flex justify-around py-2 z-50">
        <NavLink to="/" className={iconClass}>
          <FaHome />
        </NavLink>
        <NavLink to="/archive" className={iconClass}>
          <IoMdArchive />
        </NavLink>
        <NavLink to="/important" className={iconClass}>
          <MdStars />
        </NavLink>
        <NavLink to="/bin" className={iconClass}>
          <IoTrashBinSharp />
        </NavLink>
      </nav>
    </>
  );
}

export default SideBar;
