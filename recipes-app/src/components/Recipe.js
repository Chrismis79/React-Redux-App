import React from 'react';


const Recipe = props => {
    return (
        <>
        <h1>{props.title}</h1>
        <p>Total Time: {props.time} minutes</p>
        <img src={props.image} alt={props.title}/>
    
        <ul>
            {props.ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ul>
        <p>Total Calories: {props.calories}</p>
        <p>Serves: {props.servings}</p>
        <p>Calories per Serving: {props.calPerServ}</p>
        <p>Recipe is from {props.source} and can be found <a href={props.url} target="_blank">HERE</a></p>
        </>
    )
};
export default Recipe;