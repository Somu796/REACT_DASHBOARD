import { useState } from "react";
import.meta.env
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import AddIngredientForm from "./AddIngredientForm"

export default function Main() {
    /**
     * 

     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     */

    const Gemini_API_Key = import.meta.env.Gemini_API_Key

    const [ingredient, setIngredient] = useState([]) //"all the main spices", "pasta", "ground beef", "tomato paste"
    const [recipeShown, setRecipeShown] = useState(false)



    // function handleSubmit(event) {
    //     // Preventing default referesh on submit
    //     event.preventDefault()

    //     // Accessing form input of class ingredient
    //     const formData = new FormData(event.currentTarget)
    //     const newIngredient = formData.get("ingredient")

    //     // Adding to ingredinet array
    //     setIngredient(prevIngredient => [...prevIngredient, newIngredient])
    // }

    function addIngredient(formData) {
        // Accessing form input of class ingredient
        const newIngredient = formData.get("ingredient")

        // Adding to ingredinet array (Only if it is not empty let the send)
        newIngredient !== "" && setIngredient(prevIngredient => {
            const isDuplicate = prevIngredient.some(item =>
                item.toLowerCase() === newIngredient.toLowerCase().trim()
            )
            return isDuplicate ? prevIngredient : [...prevIngredient, newIngredient]
        })

    }

    function handleGetRecipe() {
        setRecipeShown(prev => !prev)
    }

    return (
        <main>
            <AddIngredientForm addIngredient={addIngredient} />
            {/* <form
                action={addIngredient}
                // onSubmit={handleSubmit}
                className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form> */}

            <IngredientsList ingredient={ingredient} recipeShown={recipeShown} handleGetRecipe={handleGetRecipe} />
            {/* {ingredient.length > 0 &&
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul
                        className="ingredients-list"
                        aria-live="polite">
                        {ingredientsListItems}
                    </ul>
                    {ingredient.length > 3 &&
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={handleGetRecipe}>
                                {recipeShown ? "Hide recipe" : "Get a recipe"}
                            </button>
                        </div>}
                </section>} */}
            {
                recipeShown &&
                <ClaudeRecipe />
            }
        </main>
    )
}


/**
 * Challenge:
 * 1. Create a boolean state that, for now, will represent whether
 *    we've gotten a recipe back from the "chef". Default to `false`.
 *    Can call it `recipeShown`.
 * 2. Grab the markup in recipeCode.md and paste it below. This will
 *    be a placeholder for the content that will come back from the 
 *    chef once we set up that feature.
 * 3. When the user clicks the "Get a recipe" button, flip the
 *    `recipeShown` state to true.
 * 4. Only display the recipe code content if `recipeShown` is true.
 */