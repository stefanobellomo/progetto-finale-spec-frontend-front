import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useState, useRef, useEffect } from "react";
import CardMainPage from "../components/CardMainPage"
import CompareCard from "../components/CompareCard";
import useDebounce from "../hooks/useDebounce";

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

    const debouncedSearch = useDebounce(setSearch, 500)

    // funzione che ci permette di scrollare automaticamente
    // Ho usato useRef per ottenere un riferimento alla sezione di confronto nel DOM.Quando la lista dei giochi da confrontare cambia, tramite useEffect eseguo scrollIntoView su quell'elemento per far scorrere automaticamente la pagina verso la sezione di confronto.

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
                        isCompared={compareList.some(c => c.id === g.id)}
                        toggleCompare={toggleCompare}
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