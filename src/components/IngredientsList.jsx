export default function IngredientsList({ ingredient, recipeShown, handleGetRecipe }) {

    const ingredientsListItems = ingredient.map(item => (
        <li key={item}>{item}</li>
    ))

    const getRecipeSection = ingredient.length > 3 &&
        (<div className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={handleGetRecipe}>
                {recipeShown ? "Hide recipe" : "Get a recipe"}
            </button>
        </div>)

    return (ingredient.length > 0 &&
        <section>
            <h2>Ingredients on hand:</h2>
            <ul
                className="ingredients-list"
                aria-live="polite">
                {ingredientsListItems}
            </ul>
            {getRecipeSection}
        </section>
    )
}