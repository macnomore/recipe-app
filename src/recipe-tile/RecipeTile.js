import React from "react";
import "./RecipeTile.css";

function RecipeTile({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipeTile">
        <img
          className="recipeTile__image"
          src={recipe["recipe"]["image"]}
          alt="Recipe-tile"
          onClick={() => window.open(recipe["recipe"]["url"])}
        />
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
      </div>
    )
  );
}

export default RecipeTile;
