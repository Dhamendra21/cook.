import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import RecipeDetails from '../components/RecipeDetails'
import FindRecipe from '../components/FindRecipe'
import RecipesPage from '../components/RecipesPage'
import AboutUs from '../components/About'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/find' element={<FindRecipe/>} />
        <Route path='/details/:id' element={<RecipeDetails />} />
        <Route path='/recipes' element={<RecipesPage/>} />
        <Route path='/about' element={<AboutUs/>} />
    </Routes>
  )
}

export default Router