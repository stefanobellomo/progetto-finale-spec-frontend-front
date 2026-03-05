import { createContext, useEffect, useState, useMemo } from "react";
const apiurl = import.meta.env.VITE_API_URL

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const [games, setGames] = useState([])
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [sort, setSort] = useState("")
    const [compareList, setCompareList] = useState([])

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

    const filteredGames = useMemo(() => {

        let result = games.filter(g => {
            const matchSearch = g.title
                .toLowerCase()
                .includes(search.toLowerCase())

            const matchCategory =
                category === "All" || g.category === category

            return matchSearch && matchCategory
        })

        if (sort === "title") {
            result = [...result].sort((a, b) =>
                a.title.localeCompare(b.title)
            )
        }

        if (sort === "category") {
            result = [...result].sort((a, b) =>
                a.category.localeCompare(b.category)
            )
        }

        return result

    }, [games, search, category, sort])

    const toggleCompare = async (game) => {
        try {
            const response = await fetch(`${apiurl}/games/${game.id}`)
            const data = await response.json()
            const fullGame = data.game

            setCompareList(prev => {
                if (prev.find(g => g.id === fullGame.id)) {
                    return prev.filter(g => g.id !== fullGame.id)
                }
                if (prev.length >= 2) {
                    return [prev[1], fullGame]
                }
                return [...prev, fullGame]
            })

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <GlobalContext.Provider value={{ games, filteredGames, search, setSearch, category, setCategory, sort, setSort, toggleCompare, compareList }}>
            {children}
        </GlobalContext.Provider>
    )
}