import Header from './components/Header';
import Entry from './components/Entry';
import travelData from "../data.js";
/**
Challenge: Project setup

- Create an App component in a separate App.jsx file which is a sibling
  to this index.jsx file.
- Create a `components` folder
- Create the following components in separate files inside
  the components folder. In each one, just render an `h1` 
  with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    - Navbar
    - Main
- Have App component import and render the Navbar and Main components
- Import and render the App component inside of index.jsx using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the `<links />` to those fonts ABOVE the style.css link in index.html.
  You may need to do some extra research to figure out how this 
  works if you haven't done it before.
*/

export default function App() {

  const get_travel_data = travelData.map((location) => <Entry
    key={location.id}
    // {...location} // concise but we depende on APIs parameter name while desigining
    // (Better) Not concise but we rename it in case better pass down, later just change in one place 
    img={location.img}
    title={location.title}
    country={location.country}
    google_link={location.googleMapsLink}
    dates={location.dates}
    text={location.text}
  />)

  return (
    <>
      <Header />
      {get_travel_data}
    </>
  );
}