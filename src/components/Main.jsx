const FunFacts = ["Was first released in 2013", "Was originally created by Jordan Walke", "Has well over 200K stars on GitHub", "Is maintained by Meta", "Powers thousands of enterprise apps, including mobile apps"]


export default function Main() {
    return (
        <main>
            <h1 className="FunFactsHeader">
                Fun facts about React
            </h1>
            <ul className="FunFactsList">
                {FunFacts.map(Facts => <li key={Facts}>{Facts}</li>)}
            </ul>
        </main>

    );
}