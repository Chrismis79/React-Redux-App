import React from 'react';
import RecipeList from './RecipeList';

const Recipe = () => {
    return (
        <>
        <h1>Title</h1>
        <p>Total Time: </p>
        <img/>
        {/* //map over items here */}
        <ol>
            <li>Ingredient List items</li>
        </ol>
        <p>Total Calories: </p>
        <p>Serves: </p>
        <p>Calories per Serving: </p>
        <p>Recipe is from ... and can be found //here</p>
        </>
    )
};
export default Recipe;