import React, { useContext, useState } from 'react'
import { RecipesContext } from '../utils/Context'
import Recipes from './Recipies'
import Footer from './Footer'
const RecipesPage = () => {
    let {recipes} = useContext(RecipesContext)
    const [selectedCategory, setSelectedCategory] = useState(""); // To store selected category

    // Extract unique categories
    const categories = [...new Set(recipes.map((r) => r.strCategory))];
  
    // Filter recipes based on the selected category
    const filteredRecipes = selectedCategory
      ? recipes.filter((r) => r.strCategory === selectedCategory)
      : recipes;
  
    // Handle category click
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
  return (
    <>
     <div className='my-10'>
      <h2 className='px-5 py-3 text-3xl font-semibold'>Popular Categories</h2>
      <div className="categories font-semibold w-full overflow-auto flex">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-red-200 px-5 py-3 mx-3 category-button"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* <h2 >Recipes:</h2> */}
      <div className='w-full flex flex-wrap justify-center gap-5'>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipeItem, index) => (
          <Recipes key={index} meal={recipeItem} />
        ))
      ) : (
        <h1>No recipes found for this category</h1>
      )}
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default RecipesPage