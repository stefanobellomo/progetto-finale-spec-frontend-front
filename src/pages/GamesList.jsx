import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import CardMainPage from "../components/CardMainPage"

export default function GamesList() {

    const { games, filteredGames, category, setCategory, search, setSearch } = useContext(GlobalContext)

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Cerca..." />
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="All">Nessun filtro</option>
                    <option value="AAA">AAA</option>
                    <option value="Indie">Indie</option>
                    <option value="Multiplayer">Multiplayer</option>
                </select>
                <button></button>
            </div>
            {
                filteredGames && filteredGames.map(g => (
                    <CardMainPage key={g.id} g={g} />
                ))
            }
        </div>
    )
}