import ReactMarkdown from 'https://esm.sh/react-markdown@7'

export default function ClaudeRecipe({ recipe }) {

    return (
        <article className="recipe-display">
            < ReactMarkdown children={recipe} />
        </article>

    )
}