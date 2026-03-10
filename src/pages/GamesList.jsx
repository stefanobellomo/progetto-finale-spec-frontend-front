import { useCallback, useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useMemo, useState, useRef, useEffect } from "react";
import CardMainPage from "../components/CardMainPage"
import CompareCard from "../components/CompareCard";

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

    const debouncedSearch = useCallback(
        debounce(setSearch, 500),
        [setSearch]
    );

    // funzione che ci permette di scrollare automaticamente
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
            <div className="filters">

                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        const value = e.target.value
                        setInputValue(value)
                        debouncedSearch(value)
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
                            <CompareCard key={g.id} g={g} />
                        ))}
                    </div>

                </div>
            )}

        </div>
    )
}