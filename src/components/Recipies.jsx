import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Recipes = ({meal,location}) => {
  
  if (location = "/find") {
    console.log('find page pe hai');
  }else{
    console.log('home page pe hai');
  }
  
 
  return (
    <Link to={location = '/find' ? `../details/${meal.idMeal}`  : `details/${meal.idMeal}`} key={meal.idMeal} className="card bg-zinc-100 rounded-md overflow-hidden hover:scale-105 transition-all ease-out text-start shadow-lg w-72  mt-10 border">
              <div className="image relative">
                <img src={meal.strMealThumb} alt="" />
                <div className="absolute bg-blend-difference top-2 left-1 opacity-70  bg-white px-3 rounded-full ">
                  <p className="font-semibold">{meal.strCategory}</p>
                </div>
              </div>

              <div className="content p-3">
                <h1 className="font-semibold text-xl">{meal.strMeal} </h1>
                <p className="w-full h-[50px] leading-5 pt-2 overflow-hidden">
                  {meal.strInstructions}
                </p>
                {/* <button className="mt-5  bg-[#F38A00] px-2 py-1 font-semibold text-white rounded-sm ">
                  {" "}
                  know more{" "}
                </button> */}
              </div>
            </Link>
  );
};

export default Recipes;
