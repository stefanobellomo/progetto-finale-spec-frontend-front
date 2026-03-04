import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"

export default function GamesList() {

    const { games } = useContext(GlobalContext)

    return (
        <div>
            {
                games.map(g => (
                    <div key={g.id}>
                        <h4>Titolo: {g.title}</h4>
                        <p>Categoria: {g.categoria}</p>
                        <Link to={`/games/${g.id}`}>Dettaglio prodotto</Link>
                    </div>
                ))
            }
        </div>
    )
}