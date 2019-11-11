import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getRecipes} from '../actions';
import Recipe from './Recipe';



const RecipeList = props => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    
    useEffect((item) => {
        props.getRecipes(item);
    }, [query])
    
    
    const handleChanges = e => {
        setSearch(e.target.value);
        
    };

     const getSearch = e => {
         e.preventDefault();
         setQuery(search);
         props.getRecipes(search);
         setSearch('');
         
    };

    if(props.isFetching) {
        return <h2>Bringing on the yum...</h2>
    };

    return (
        <div>
            <form onSubmit={getSearch}>
                <input type='text' value={search} onChange={handleChanges} placeholder='Type main ingredient here...'/>
                <button type='submit'>Search</button>
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
        query: state.query
    }
}
export default connect(mapStateToProps, {getRecipes})(RecipeList);