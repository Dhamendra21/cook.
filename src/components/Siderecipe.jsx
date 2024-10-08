import React, { useContext } from 'react'
import { RecipesContext } from '../utils/Context'
import { Link } from 'react-router-dom';

const Siderecipe = () => {
    let {recipes} = useContext(RecipesContext)
    console.log(recipes);
    
  return (
    <div >
       {
        recipes.map((r)=>{
           return <Link key={r.idMeal} to={`../details/${r.idMeal}`} className="card m-5 flex gap-5 ">
            <div className="image w-32 rounded-md overflow-hidden">
            <img className="w-full" src={r.strMealThumb} alt="Card image cap" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{r.strMeal} </h5>
                <p className="card-text h-15 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maxime facere laudantium!</p>
            </div>
        </Link>
        })
       }
    </div>
  )
}

export default Siderecipe