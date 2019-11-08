import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getRecipes} from '../actions';
import Recipe from './Recipe';

const RecipeList = props => {
    useEffect(() => {
        //fetch recipes
        props.getRecipes();
    }, []);

    if(props.isFetching) {
        return <h2>Bringing on the yum...</h2>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>} 
            {props.recipes.map(item => (
                <Recipe  key={item.index} 
                title={item.recipe.label}
                calories={item.recipe.calories}
                image={item.recipe.image}
                ingredients={item.recipe.ingredients}
                servings={item.recipe.yield}
                source={item.recipe.source}
                url={item.recipe.url}
                calPerServ={item.recipe.calories / item.recipe.yield}
                time={item.recipe.totalTime}/>
            ))}
            
        </div>
    )
}

//mapStateToProps and connect
const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, {getRecipes})(RecipeList);