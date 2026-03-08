import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"

export default function Favourites() {
    const { favList, clearFav, removeFav } = useContext(GlobalContext)

    return (
        <div className="favourites-page">
            <h1 className="favourites-title">Preferiti</h1>

            {favList.length === 0 ? (
                <p className="favourites-empty">Non hai ancora aggiunto preferiti.</p>
            ) : (
                <>
                    <button
                        className="favourites-clear-btn"
                        onClick={clearFav}
                    >
                        Svuota preferiti
                    </button>

                    <div className="favourites-list">
                        {favList.map(game => (
                            <div key={game.id} className="favourite-card">
                                <div className="favourite-card-title">{game.title}</div>
                                <button
                                    className="favourite-remove-btn"
                                    onClick={() => removeFav(game.id)}
                                    aria-label={`Rimuovi ${game.title} dai preferiti`}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
            <Link className="back-home-link" to="/">Torna indietro</Link>
        </div>
    )
}