import React from 'react'

const RecipeCard = ({title,image,ingredients,instructions}) => {
  return (
    <div className ="recipe-card">
          
        <img src={image} alt = {title} className= "recipe-image"/>

        <h2>{title}</h2>

          <h4>Ingredients</h4>
        <ul>
            {ingredients.map((item)=>{
                return <li>{item}</li>
            })}
        </ul>
        <p> <strong>Instructions:</strong> {instructions} </p>
    </div>
  );
};

export default RecipeCard;