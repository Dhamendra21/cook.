import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav py-5 px-10 flex justify-between items-center">
      {/* Logo */}
      <div className="logo">
        <Link to="/" className="font-bold text-2xl">Cook.</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Links for Desktop */}
      <div className="hidden md:flex px-5 gap-10">
        <NavLink className={(e) => {
          return e.isActive ? "text-blue-500 text-[1.2vw] font-semibold border-b-4 border-blue-500" : "text-gray-500 hover:text-blue text-[1.2vw] font-semibold";
        }} to="/"> Home </NavLink>
        <NavLink className={(e) => {
          return e.isActive ? "text-blue-500 text-[1.2vw] font-semibold border-b-4 border-blue-500" : "text-gray-500 hover:text-blue text-[1.2vw] font-semibold";
        }} to="/recipes">Recipes</NavLink>
        <NavLink className={(e) => {
          return e.isActive ? "text-blue-500 text-[1.2vw] font-semibold border-b-4 border-blue-500" : "text-gray-500 hover:text-blue text-[1.2vw] font-semibold";
        }} to="/find">Find Recipes</NavLink>
        <NavLink className={(e) => {
          return e.isActive ? "text-blue-500 text-[1.2vw] font-semibold border-b-4 border-blue-500" : "text-gray-500 hover:text-blue text-[1.2vw] font-semibold";
        }} to="/about">About Us</NavLink>
      </div>

      {/* Links for Mobile (show when isOpen is true) */}
      {isOpen && (
        <div className="flex transition-all ease-in-out  flex-col absolute top-16 left-0 w-full bg-white p-5 md:hidden">
          <NavLink className={(e) => {
            return e.isActive ? "text-blue-500 text-lg font-semibold mb-4" : " transition-all ease-linear text-gray-500 hover:text-blue text-lg font-semibold mb-4";
          }} to="/"> Home </NavLink>
          <NavLink className={(e) => {
            return e.isActive ? "text-blue-500 text-lg font-semibold mb-4" : " transition-all ease-linear text-gray-500 hover:text-blue text-lg font-semibold mb-4";
          }} to="/recipes">Recipes</NavLink>
          <NavLink className={(e) => {
            return e.isActive ? "text-blue-500 text-lg font-semibold mb-4" : " transition-all ease-linear text-gray-500 hover:text-blue text-lg font-semibold mb-4";
          }} to="/find">Find Recipes</NavLink>
          <NavLink className={(e) => {
            return e.isActive ? "text-blue-500 text-lg font-semibold mb-4" : " transition-all ease-linear text-gray-500 hover:text-blue text-lg font-semibold mb-4";
          }} to="/about">About Us</NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
