import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

export const RecipesContext = createContext();

const Context = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [search ,setSearchTerm] = useState([])
    const getFood = async () => {
        try {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`);
            setRecipes(data.meals)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFood();
        // console.log("API call made.");
    }, []);

    // console.log(recipes); // To see if recipes state is being updated

    return (
        <RecipesContext.Provider value={{ recipes, setRecipes, search , setSearchTerm }}>
            {props.children}
        </RecipesContext.Provider>
    );
};

export default Context;
