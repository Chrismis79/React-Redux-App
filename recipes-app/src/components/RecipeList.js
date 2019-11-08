import React, { useEffect } from 'react';
import Recipe from './Recipe';

const RecipeList = () => {
    useEffect(() => {
        //fetch recipes
    }, []);
    return (
        <div>
            <p>Map over recipe and display</p>
            <Recipe />
        </div>
    )
}

//mapStateToProps and connect
export default RecipeList;