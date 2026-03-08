import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"
import CardMainPage from "../components/CardMainPage"

export default function GamesList() {

    const {
        filteredGames,
        category,
        setCategory,
        search,
        setSearch,
        sort,
        setSort,
        toggleCompare,
        compareList,
        addFav,
        removeFav,
        isInFav
    } = useContext(GlobalContext)

    return (
        <div className="games-page">

            {/* FILTRI */}
            <div className="filters my-2">

                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Cerca..."
                />

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

            {/* LISTA GIOCHI */}
            <div className="games-grid">
                {filteredGames && filteredGames.map(g => (
                    <CardMainPage
                        key={g.id}
                        g={g}
                        toggleCompare={toggleCompare}
                        compareList={compareList}
                        addFav={addFav}
                        removeFav={removeFav}
                        isInFav={isInFav}
                    />
                ))}
            </div>

            {/* CONFRONTO */}
            {compareList.length > 0 && (
                <div className="compare-section">

                    <h2>Confronto</h2>

                    <div className="compare-grid">
                        {compareList.map(g => (
                            <div key={g.id} className="compare-card">
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