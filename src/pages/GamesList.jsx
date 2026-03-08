import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useMemo, useState, useRef, useEffect } from "react";
import CardMainPage from "../components/CardMainPage"

function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay);
    };
}

export default function GamesList() {

    const {
        filteredGames,
        category,
        setCategory,
        setSearch,
        sort,
        setSort,
        toggleCompare,
        compareList,
        addFav,
        removeFav,
        isInFav
    } = useContext(GlobalContext)

    const [inputValue, setInputValue] = useState("")
    const compareSectionRef = useRef(null)

    const debouncedSetSearch = useMemo(() => {
        return debounce((value) => {
            setSearch(value)
        }, 300)
    }, [setSearch])

    useEffect(() => {
        if (compareList.length > 0 && compareSectionRef.current) {
            compareSectionRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }, [compareList])

    return (
        <div className="games-page">

            {/* FILTRI */}
            <div className="filters my-2">

                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        const value = e.target.value
                        setInputValue(value)
                        debouncedSetSearch(value)
                    }}
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
            {filteredGames.length === 0 ? <p>Nessun gioco trovato...</p> : <div className="games-grid">
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
            </div>}

            {/* CONFRONTO */}
            {compareList.length > 0 && (
                <div className="compare-section" ref={compareSectionRef}>

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