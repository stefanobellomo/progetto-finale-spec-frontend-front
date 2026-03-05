import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import CardMainPage from "../components/CardMainPage"

export default function GamesList() {

    const { filteredGames, category, setCategory, search, setSearch, sort, setSort, toggleCompare, compareList } = useContext(GlobalContext)

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
                <select
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                >
                    <option value="">Nessun ordinamento</option>
                    <option value="title">Titolo A-Z</option>
                    <option value="category">Categoria A-Z</option>
                </select>
            </div>
            {
                filteredGames && filteredGames.map(g => (
                    <div key={g.id}>
                        <CardMainPage g={g} toggleCompare={toggleCompare} compareList={compareList} />
                    </div>
                ))
            }
            {compareList.length > 0 && (
                <div className="compare-section">
                    <h2>Confronto</h2>
                    <div>
                        {compareList.map(g => (
                            <div key={g.id}>
                                <h3>{g.title}</h3>
                                <p>Categoria: {g.category}</p>
                                <p>Prezzo: {g.price}</p>
                                <p>Valutazione: {g.rating}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}