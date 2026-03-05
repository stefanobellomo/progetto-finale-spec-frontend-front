import { Link } from "react-router-dom"

export default function CardDetailsPage() {
    return (
        <div>
            <p>{game.title}</p>
            <p>{game.description}</p>
            <p>{game.developer}</p>
            <p>{game.playtime}</p>
            <Link to={'/'}>Torna ai giochi</Link>
        </div>
    )
} 