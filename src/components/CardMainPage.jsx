import { Link } from "react-router-dom"

export default function CardMainPage({ g, toggleCompare, compareList, isInFav, removeFav, addFav }) {

    return (
        <div>
            <h4>Titolo: {g.title}</h4>
            <p>Categoria: {g.categoria}</p>
            <Link to={`/games/${g.id}`}>Dettaglio prodotto</Link>
            <button onClick={() => toggleCompare(g)}>
                {compareList.find(c => c.id === g.id) ? "Rimuovi da confronto" : "Confronta"}
            </button>
            <button onClick={() => isInFav(g.id) ? removeFav(g.id) : addFav(g)}>
                {isInFav(g.id) ? "Rimuovi dai favoriti" : "Aggiungi ai favoriti"}
            </button>
        </div>
    )
}