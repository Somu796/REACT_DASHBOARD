export default function AddIngredientForm({ addIngredient }) {
    return (<form
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
    </form>)

}