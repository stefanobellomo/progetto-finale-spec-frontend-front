import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function Favourites() {

    const { favList, clearFav, removeFav } = useContext(GlobalContext)

    return (
        <div className="container">
            <h1>Preferiti</h1>

            {favList.length === 0 ? (
                <p>Non hai ancora aggiunto preferiti.</p>
            ) : (
                <>
                    <button
                        className="btn btn-danger mb-3"
                        onClick={clearFav}
                    >
                        Svuota preferiti
                    </button>

                    {favList.map(game => (
                        <div
                            key={game.id}
                            className="card d-flex justify-content-between align-items-center p-2 mb-2"
                        >
                            <div>{game.title}</div>

                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeFav(game.id)}
                            >
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}