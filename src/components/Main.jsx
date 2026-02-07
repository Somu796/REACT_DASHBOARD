import { useState, useEffect } from "react"
import Meme from "./Meme"
export default function Main() {

    /**
     * Challenge: move the hardcoded meme info into React
     * state. Use an object with `topText`, `bottomText`,
     * and `imageUrl` properties, and set the initial values to
     * the ones hardcoded below.
     */

    const [memeData, setMemeData] = useState({
        topText: "One Does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        allMemes: []
    })

    // Handles Up and Down Writing modification
    function handleChange(event) {
        console.log(event.currentTarget)
        const { name, value } = event.currentTarget
        console.log(name)
        console.log(value)
        setMemeData(prev => ({ ...prev, [name]: value }))
    }
    // Fetch Images
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data =>
                setMemeData(
                    prevMeme =>
                    ({
                        ...prevMeme,
                        allMemes: data.data.memes
                    })))
    }, [])

    function getNewImage() {
        const randArray = memeData.allMemes[Math.floor(Math.random() * memeData.allMemes.length)]
        const newUrl = randArray.url
        setMemeData(prevMeme => ({
            ...prevMeme,
            imageUrl: newUrl
        }))
    }
    // console.log(memeData.imageUrl)

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder={memeData.topText}
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder={memeData.bottomText}
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={getNewImage}>Get a new meme image 🖼</button>
            </div>
            <Meme imageUrl={memeData.imageUrl} topText={memeData.topText} bottomText={memeData.bottomText} />
        </main>
    )
}