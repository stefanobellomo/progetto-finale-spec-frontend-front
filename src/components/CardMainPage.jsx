import { Link } from "react-router-dom"

export default function CardMainPage({ g, toggleCompare, compareList, isInFav, removeFav, addFav }) {

    return (
        <div className="card-compact">
            <h4 className="card-title">{g.title}</h4>
            <p className="card-category"><strong>Categoria: </strong> {g.category}</p>
            <div className="card-buttons">
                <button className="compare-btn" onClick={() => toggleCompare(g)}>
                    {compareList.find(c => c.id === g.id) ? "Rimuovi" : "Confronta"}
                </button>
                <button
                    className="fav-btn btn btn-light"
                    onClick={() => isInFav(g.id) ? removeFav(g.id) : addFav(g)}
                >
                    <i className={isInFav(g.id) ? "bi bi-heart-fill text-danger" : "bi bi-heart"}></i>
                </button>
            </div>
            <Link to={`/games/${g.id}`} className="details-link">Dettaglio prodotto</Link>
        </div>
    )
}