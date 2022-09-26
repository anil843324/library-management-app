import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink  ,Link} from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full  h-[80px] bg-black ">
      <div className="max-w-[1240px] mx-auto px-4  flex justify-between items-center h-full">
        <div>
           <Link to={'/'}>
           <h1 className="text-[#00d8ff] " >Masai Library Management</h1>
           </Link>
         
        </div>
        <div className=" hidden md:flex">
          <ul className="flex text-white items-center cursor-pointer ">
            <NavLink
              to={"/dashboard"}
              style={({ isActive }) => ({
                color: isActive ? "#FF0000" : "#ffffff",
               
              })}
            >
              <li>Dashboard</li>
            </NavLink>

            <NavLink
              to={"/mybooks"}
              style={({ isActive }) => ({
                color: isActive ? "#FF0000" : "#ffffff",
               
              })}
            >
              <li>My Books</li>
            </NavLink>

            <NavLink
              to={"/bookmarks"}
              style={({ isActive }) => ({
                color: isActive ? "#FF0000" : "#ffffff",
                
              })}
            >
              <li>BookMarks</li>
            </NavLink>
          </ul>
        </div>
        {/* Ham burger */}
        <div className="block md:hidden ">
          {/* <AiOutlineMenu size={30} className="text-white" /> */}
          {toggle ? (
            <AiOutlineMenu
              size={30}
              className="text-white cursor-pointer"
              onClick={() => handleToggle()}
            />
          ) : (
            <AiOutlineClose
              size={30}
              className="text-white cursor-pointer"
              onClick={() => handleToggle()}
            />
          )}
        </div>
        {/* mobile menu */}
        {!toggle ? (
          <div className="  md:hidden w-full  bg-black text-white absolute top-[60px] left-0  flex justify-center text-center">
            <ul className="text-2xl">
              <li>Dashboard</li>
              <li>My Books</li>
              <li>BookMarks</li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
