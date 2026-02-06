import { GoogleGenAI } from "@google/genai";
import { InferenceClient } from '@huggingface/inference'
import.meta.env


const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`

// Gemini
export async function getRecipeFromGemini(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    const prompt = `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;

    try {
        const result = await genAI.models.generateContent({
            model: "gemini-2.0-flash-lite-001",
            contents: prompt,
            config: {
                systemInstruction: SYSTEM_PROMPT,
            }

        });

        const text = result.text();

        if (!text) throw new Error("No recipe returned");

        return text;

    } catch (error) {
        // Error Handling Theory: Categorize the error for the user
        console.error("Gemini API Error:", error.message);

        if (error.message.includes("API key")) {
            return "Error: Invalid API Key. Please check your .env file.";
        }

        return "I'm sorry, I'm having trouble coming up with a recipe right now. Please try again!";
    }
}



// export async function debugModels() {
//     try {
//         // This lists all models available to your account
//         const models = await genAI.listModels();
//         console.log("Your available models:", models);
//     } catch (e) {
//         console.error("Could not list models:", e);
//     }
// }

// Hugging Face APIs
const VITE_HUGGING_FACE_API_KEY = import.meta.env.VITE_HUGGING_FACE_API_KEY
// Make sure you set an environment variable in Scrimba 
// for HF_ACCESS_TOKEN
const hf = new InferenceClient(VITE_HUGGING_FACE_API_KEY)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            // provider: "together",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 500,
            // provider: "hf-inference"
        })
        return response.choices[0].message.content
    } catch (error) {
        // Error Handling Theory: Categorize the error for the user
        console.error("HF API Error:", error.message);

        if (error.message.includes("API key")) {
            return "Error: Invalid API Key. Please check your .env file.";
        }

        return "I'm sorry, I'm having trouble coming up with a recipe right now. Please try again!";
    }
}
