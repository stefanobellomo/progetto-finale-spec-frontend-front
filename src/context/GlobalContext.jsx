import { createContext, useEffect, useState, useMemo, useCallback } from "react";
const apiurl = import.meta.env.VITE_API_URL

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const [games, setGames] = useState([])
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [sort, setSort] = useState("")
    const [compareIds, setCompareIds] = useState([])
    const [compareList, setCompareList] = useState([])
    const [favList, setFavList] = useState(() => {
        const savedFav = localStorage.getItem("favourites")
        return savedFav ? JSON.parse(savedFav) : []
    })


    // chiamata per recuperare i dati della pagina principale
    const fetchGames = async () => {
        try {
            const response = await fetch(`${apiurl}/games`)
            const data = await response.json()
            return setGames(data)
        } catch (error) {
            console.error('chiamata api fallita')
        }
    }

    useEffect(() => {
        fetchGames()
    }, [])

    // filtri pagina

    const filteredGames = useMemo(() => {

        let result = games.filter(g => {
            const matchSearch = g.title.toLowerCase().includes(search.toLowerCase())
            const matchCategory = category === "All" || g.category === category
            return matchSearch && matchCategory
        })

        if (sort === "title") {
            result = [...result].sort((a, b) => a.title.localeCompare(b.title))
        }

        if (sort === "category") {
            result = [...result].sort((a, b) => a.category.localeCompare(b.category))
        }

        return result

    }, [games, search, category, sort])


    // funzione per il comparamento di più giochi

    const fetchGameById = useCallback(async (id) => {
        const response = await fetch(`${apiurl}/games/${id}`)

        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`)
        }

        const data = await response.json()
        return data.game
    }, [])

    const toggleCompare = useCallback((game) => {
        setCompareIds(prev => {
            if (prev.includes(game.id)) {
                return prev.filter(id => id !== game.id)
            }

            if (prev.length >= 4) {
                return [prev[1], game.id]
            }

            return [...prev, game.id]
        })
    }, [])

    useEffect(() => {
        if (compareIds.length === 0) {
            setCompareList([])
            return
        }

        const loadCompareGames = async () => {
            try {
                const fullGames = await Promise.all(
                    compareIds.map(id => fetchGameById(id))
                )

                setCompareList(fullGames)
            } catch (error) {
                console.error("Errore nel caricamento del confronto:", error)
            }
        }

        loadCompareGames()
    }, [compareIds, fetchGameById])

    // gestione della barra dei preferiti

    const addFav = (game) => {
        setFavList(prev => {
            if (!prev.find(g => g.id === game.id)) {
                return [...prev, game]
            }
            return prev
        })
    }

    const removeFav = (id) => {
        setFavList(prev => prev.filter(g => g.id !== id))
    }

    const isInFav = (id) => {
        return favList.some(g => g.id === id)
    }

    const clearFav = () => {
        setFavList([])
    }

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favList))
    }, [favList])

    return (
        <GlobalContext.Provider value={{
            games,
            filteredGames,
            search,
            setSearch,
            category,
            setCategory,
            sort,
            setSort,
            toggleCompare,
            compareList,
            favList,
            addFav,
            removeFav,
            isInFav,
            clearFav
        }}>
            {children}
        </GlobalContext.Provider>
    )
}