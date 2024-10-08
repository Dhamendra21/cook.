import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Recipes from "./Recipies";
import { RecipesContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Popular = () => {
  const { recipes, setRecipes } = useContext(RecipesContext);

  console.log(recipes);

  return (
    <div className="text-center max-sm:text-start px-5 py-10 w-full  bg-[#fffcf5]">
      <h1 className="text-[3vw] max-sm:text-[9vw] leading-none font-semibold">
        Popular recipes you can't miss{" "}
      </h1>
      <p className="text-xl mt-5 m-auto font-semibold leading-6 opacity-50">
        From comfort food Classics to exotic flavors, our featured recipes are
        sure to impress{" "}
      </p>
      <div className="flex gap-10 flex-wrap justify-center ">
        {recipes.map((r, i) => {
          return (
            <Recipes key={i} meal={r}/>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
