import { useState } from "react";

import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import AddIngredientForm from "./AddIngredientForm"
import { getRecipeFromMistral } from "src/Ai"

export default function Main() {

    const [ingredient, setIngredient] = useState([]) //"all the main spices", "pasta", "ground beef", "tomato paste"
    const [recipeShown, setRecipeShown] = useState(false)
    const [recipe, setRecipe] = useState("")

    // On clicking add Ingredient access formData, perform sanity check 
    // and add in the ingredient array
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

    // on clicking getRecipe change state recipeShown which is attached instead of getRecipe
    async function handleGetRecipe() {
        // 1. If we are about to show the recipe (it's currently hidden)
        if (!recipeShown) {
            try {
                // const recipeData = await getRecipeFromGemini(ingredient)
                const recipeData = await getRecipeFromMistral(ingredient)
                setRecipe(recipeData)
            } catch (err) {
                console.error("Failed to get recipe:", err)
            }
        }

        // 2. Toggle the visibility state
        setRecipeShown(prev => !prev)
    }

    return (
        <main>
            <AddIngredientForm addIngredient={addIngredient} />
            <IngredientsList ingredient={ingredient} recipeShown={recipeShown} handleGetRecipe={handleGetRecipe} />
            {
                recipeShown &&
                <ClaudeRecipe recipe={recipe} />
            }
        </main>
    )
}