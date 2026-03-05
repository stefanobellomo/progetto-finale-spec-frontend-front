import { Link } from "react-router-dom"

export default function CardMainPage({ g }) {
    return (
        <div>
            <h4>Titolo: {g.title}</h4>
            <p>Categoria: {g.categoria}</p>
            <Link to={`/games/${g.id}`}>Dettaglio prodotto</Link>
        </div>
    )
}