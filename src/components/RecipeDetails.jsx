import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipesContext } from "../utils/Context";
import Recipes from "./Recipies";
import Footer from "./Footer"
import Siderecipe from "./Siderecipe";
import LoadingDummy from "./LoadingDummy";

const RecipeDetails = () => {
  const [singleMeal, setsingleMeal] = useState([]);
  let { id } = useParams();
  let { search, recipes, } = useContext(RecipesContext);
  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
  } = singleMeal;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = singleMeal[`strIngredient${i}`];
    const measure = singleMeal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient,
        measure: measure || "", // If measure is missing, use an empty string
      });
    }
  }
  // console.log(ingredients);

  useEffect(() => {
    if (recipes && recipes.length != 0) {
      // console.log(recipes);
      let recipe = recipes.filter((r) => r.idMeal === id);
      // console.log(recipes);

      if (recipe) {
        setsingleMeal(recipe[0]);
      }
    }
  }, [id, recipes]);
// console.log( "re",recipes);

  return  ( singleMeal != 0 ?<> <div className="flex max-sm:flex-wrap gap-10 justify-center ">
      <div  className="mealsetails px-5 mb-10 max-sm:w-full w-1/2">
        <h1 className="text-4xl my-3  font-bold">{strMeal}</h1>
        <h4 className="mb-5 font-semibold">Credit by The meal Db </h4>
        <p className="text-md font-semibold opacity-60">{strInstructions}</p>
        <div className="img-container w-1/2 rounded-md overflow-hidden">
          <img src={strMealThumb} className="w-full py-10 rounded-lg " alt="" />
        </div>
        <h3 className="text-3xl font-semibold my-5">Ingredient</h3>
       <div className="mb-10">
       {ingredients.map((item, index) => {
          return (
            <ol key={index} className="px-10 ">
              <li className=" text-xl list-disc" key={index}>
                {item.ingredient} {item.measure}
              </li>
            </ol>
          );
        })}
       </div>
        <a className=" text-white font-semibold bg-red-600 px-5 py-2 my-10" href={strYoutube}> watch on Youtube </a>
      <div className="w-full flex gap-5 flex-wrap">
      
      </div>
      </div>
      <div className="w-4/12 max-sm:w-full h-screen overflow-auto py-5 flex-col gap-5 ">
        <h1 className="text-center text-2xl font-bold tracking-tighter">Related recipes</h1>
        <Siderecipe/>
      </div>
    </div> 
    <Footer/>
    </>: <LoadingDummy/>
  ) 
};

export default RecipeDetails;
