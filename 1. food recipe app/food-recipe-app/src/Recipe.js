import React from "react";

const Recipe = ({ image, title, cuisine, dish, ingredients }) => {
  return (
    <>
      <section>
          <div>
            <article>
              <figure>
                <img src={image} alt="food" />
              </figure>
              <div>
                <h2>{title}</h2>
                <p>Cuisine type: {cuisine}</p>
                <p>Dish Type: { dish}</p>
                <div>
                  <p>Ingredients:</p>
                  <ol>
                    {ingredients.map((ingredient) => (
                      <li>• {ingredient.text}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          </div>
      </section>
    </>
  );
};

export default Recipe;