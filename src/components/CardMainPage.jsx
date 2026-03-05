import { Link } from "react-router-dom"

export default function CardMainPage({ g, toggleCompare, compareList }) {
    return (
        <div>
            <h4>Titolo: {g.title}</h4>
            <p>Categoria: {g.categoria}</p>
            <Link to={`/games/${g.id}`}>Dettaglio prodotto</Link>
            <button onClick={() => toggleCompare(g)}>
                {compareList.find(c => c.id === g.id) ? "Rimuovi da confronto" : "Confronta"}
            </button>
        </div>
    )
}