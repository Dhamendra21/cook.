import axios from "axios";
import React, { useContext, useState } from "react";
import { RecipesContext } from "../utils/Context";
import Recipes from "./Recipies";
import { useLocation } from "react-router-dom";
import LoadingDummy from "./LoadingDummy";
import Footer from "./Footer"

const FindRecipe = () => {
  const [searchMeal, setSearchMeal] = React.useState("");
  const [recipe,setRecipe ] = useState([])
  const {recipes,setRecipes} = useContext(RecipesContext)
  const location = useLocation()
  const handleSearch = async (e) => {
    e.preventDefault();
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
      if(data != 0){
        setRecipe(data.meals);
        setRecipes(data.meals)
      }
    try {
    } catch (error) {
      console.log(error);
    }
  };
  console.log(recipes);
  console.log(location);
  
  return (
    <> 
    <div className="min-h-screen py-10 w-full">
      <h1 className=" capitalize text-center mt-10 text-4xl font-bold ">
      Find what you want{" "}
      </h1>
      <p className="text-center tracking-tighter capitalize font-semibold mt-2 opacity-60 ">
      Discover what you want to cook today{" "}
      </p>
      <form
        onSubmit={(e) => handleSearch(e)}
        className="m-auto max-sm:w-full px-5  w-1/2"
      >
       <div className="w-full flex flex-nowrap items-center justify-center h-fit ">
       <input
          onChange={(e) => setSearchMeal(e.target.value)}
          type="text"
          placeholder="Enter what you want"
          className='mt-10 bg-slate-100 w-10/12 max-sm:w-full  py-3 px-3' 
        />
        <button type="submit" className='py-3 -mb-10 px-7 font-semibold text-white bg-[#F38A00] '> Search</button>
       </div>
      </form>
       {recipe!=null  && recipes.length === 0 ?  <LoadingDummy /> : ""}
       <div className="w-full flex items-center justify-center gap-5 flex-wrap">
        {  
        recipe === null ?(
          <h1 className="mt-5 text-2xl font-semibold">No recipe found</h1>
        ): recipe.map((r,i)=>{
          return recipe ?  <Recipes location={location} key={i} meal={r}/> : <h1>loading</h1>
         })
        }
       </div>
    </div>
    <Footer/>
    </>
  );
};

export default FindRecipe;
