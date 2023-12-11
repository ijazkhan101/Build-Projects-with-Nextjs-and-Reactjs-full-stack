import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "1088c2a8";
  const APP_KEY = "eba67824da5c379c37ddd14545a62b5a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Rice");


  useEffect(() => {
    const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/searchq=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };


  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <section>
        <form onSubmit={getSearch}>
          <input
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Input food" />
          <button type="submit">
            Search
          </button>
        </form>

        <article>
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              cuisine={recipe.recipe.cuisineType}
              dish={recipe.recipe.dishType}
            />
          ))}
        </article>
      </section>
    </>
  );
}

export default App;