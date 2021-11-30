import "./App.css";
import { useState } from "react";
import axios from "axios";
import RecipeTile from "./recipe-tile/RecipeTile";

function App() {
  const YOUR_APP_ID = process.env.REACT_APP_API_ID;
  const YOUR_APP_KEY = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegan");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    let result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //Prevent page reload when button is clicked
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <form className="app__seachForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter the ingredient"
          autoComplete="off"
          className="app__input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select className="app__healthLabels">
          <option
            value="vegan"
            onClick={() => {
              setHealthLabel("vegan");
            }}
          >
            vegan
          </option>
          <option
            value="vegeterian"
            onClick={() => {
              setHealthLabel("vegeterian");
            }}
          >
            vegeterian
          </option>
          <option
            value="dairy-free"
            onClick={() => {
              setHealthLabel("dairy-free");
            }}
          >
            dairy-free
          </option>
          <option
            value="gluten-free"
            onClick={() => {
              setHealthLabel("gluten-free");
            }}
          >
            gluten-free
          </option>
          <option
            value="low-sugar"
            onClick={() => {
              setHealthLabel("low-sugar");
            }}
          >
            low-sugar
          </option>
          <option
            value="paleo"
            onClick={() => {
              setHealthLabel("paleo");
            }}
          >
            paleo
          </option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </form>
      <div className="app__recipes">
        {recipes.map((recipe, index) => {
          return <RecipeTile key={healthLabel + index} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
