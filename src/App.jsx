import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
  /**
   * Challenge: grab the employment status from the form and log it
   * to the console. (Remember to select one of the radios before submitting)
   * 
   * Note: This won't work the way you might expect quite yet!
   */
  // OLD Technique 
  // function signUp(formData) {
  //   const email = formData.get("email")
  //   const password = formData.get("password")
  //   const employmentStatus = formData.get("employmentStatus")
  //   const dietaryRestrictions = formData.getAll("dietaryRestrictions") // For all is only get as we are 
  //   // accessing only one value, but here multiple so get all
  //   const favColor = formData.get("favColor")
  //   console.log(favColor)
  // }

  function signUp(formData) {
    const data = Object.fromEntries(formData) // Everything is returning string so this can access all
    const dietaryRestrictions = formData.getAll("dietaryRestrictions") // Checkbox returning many so we still need to write up this
    const allData = {
      ...data,
      dietaryRestrictions
    }
    console.log(allData) // return {key:pair, multiSelect:[]}
  }


  return (
    <section>
      <h1>Signup form</h1>
      {/* action made sure form doesn't refresh, also accessing data is easier */}
      <form action={signUp}>
        {/* Can Perform Email Checks */}
        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        {/* Keep password hidden */}
        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        {/* Textbox */}
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        {/* Radio button; defaulCheck keep this as default */}
        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
          </label>
        </fieldset>

        {/* Checkbox (multiple select) */}
        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
          </label>
        </fieldset>

        {/* Dropdown with --choose a color-- sowing up, but disabled so can't be selected */}
        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}