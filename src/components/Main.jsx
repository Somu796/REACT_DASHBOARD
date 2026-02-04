import { useState } from "react";

export default function Main() {


    const [ingredient, setIngredient] = useState([])

    const ingredientsListItems = ingredient.map(item => (
        <li key={item}>{item}</li>
    ))

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

        // Adding to ingredinet array
        setIngredient(prevIngredient => [...prevIngredient, newIngredient])

    }

    return (
        <main>
            <form
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
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}