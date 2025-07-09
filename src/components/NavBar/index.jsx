import React from "react"; 
import logo from  "../../assets/logo.png";

const NavBar = () => {
  return (
    <header className="flex items-end font-mono border-b-2 border-gray-100 px-3 py-2">
        <div className="w-24 h-auto bg-yellow-100 rounded-xl">
        <img src={logo} 
        alt="Logo"/>
        </div>
        <h1 className="text-lg  font-bold py-1 px-4">~Your Note App</h1>
        
    </header>
  );
};

export default NavBar;
