import { Link } from "react-router-dom"
import { memo } from "react"

const CardMainPage = memo(function CardMainPage({
    g,
    isCompared,
    toggleCompare,
    isInFav,
    removeFav,
    addFav
}) {

    const isFavourite = isInFav(g.id)

    return (
        <article className="card-compact">
            <h4 className="card-title">{g.title}</h4>

            <p className="card-category">
                <strong>Categoria:</strong> {g.category}
            </p>

            <div className="card-buttons">
                <button
                    type="button"
                    onClick={() => toggleCompare(g)}
                >
                    {isCompared ? "Rimuovi" : "Confronta"}
                </button>

                <button
                    type="button"
                    className={`fav-btn ${isFavourite ? "is-active" : ""}`}
                    onClick={() => isFavourite ? removeFav(g.id) : addFav(g)}
                    aria-label={
                        isFavourite
                            ? `Rimuovi ${g.title} dai preferiti`
                            : `Aggiungi ${g.title} ai preferiti`
                    }
                >
                    <i className={isFavourite ? "bi bi-heart-fill" : "bi bi-heart"}></i>
                </button>
            </div>

            <Link to={`/games/${g.id}`} className="details-link">
                Dettaglio prodotto
            </Link>
        </article>
    )
})

export default CardMainPage