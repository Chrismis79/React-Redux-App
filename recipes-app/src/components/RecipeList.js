import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getRecipes, searchRecipes} from '../actions';
import Recipe from './Recipe';



const RecipeList = props => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    console.log({props})
    
    useEffect(() => {
        props.getRecipes();
    }, []);
  
    
    const handleChanges = e => {
        // e.preventDefault();
        setSearch(e.target.value);
    };

     const getSearch = e => {
         e.preventDefault();
         setQuery(search);
         props.searchRecipes(search);
         setSearch('');
    };

    if(props.isFetching || props.isSearching) {
        return <h2>Bringing on the yum...</h2>
    };

    return (
        <div>
            <form onSubmit={getSearch}>
                <input type='text' value={search} onChange={handleChanges} placeholder='Type main ingredient here...'/>
                <button type='submit'>Search</button>
            </form>
            <h4>{props.item} Recipes:</h4>
             {props.error ? <p>{props.error}</p> : 
            props.recipes.map(item => (
                <Recipe  key={item.recipe.url} 
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
            } 
        </div>
    )
}

//mapStateToProps and connect
const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        isFetching: state.isFetching,
        isSearching: state.isSearching,
        error: state.error,
    }
}
export default connect(mapStateToProps, {getRecipes, searchRecipes})(RecipeList);