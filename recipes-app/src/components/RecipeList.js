import React from 'react';
import {connect} from 'react-redux';
import {getRecipes} from '../actions';
import Recipe from './Recipe';




// const searchCreator = item => {
//     return { type: "SET_SEARCH", payload: item };
//   };

const RecipeList = props => {
    
    const handleChanges = e => {
        e.preventDefault();
        props.getRecipes(e.target.value);
    };

    // const saveSearchTerm = () => {
    //     props.getRecipes(searchCreator(item));
    // };

    const getItem = (item) => {
        //fetch recipes
         
        props.getRecipes(item);
    }

    if(props.isFetching) {
        return <h2>Bringing on the yum...</h2>
    };

    

    return (
        <div>
            <form onSubmit={getItem}>
                <input type='text' value={props.item} onChange={handleChanges} placeholder='Type main ingredient here...'/>
                <button type='submit' onClick={getRecipes}>Search</button>
            </form>
            <h4>{props.item} Recipes:</h4>
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
        error: state.error,
        item: state.item
    }
}
export default connect(mapStateToProps, {getRecipes})(RecipeList);