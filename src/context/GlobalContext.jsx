import { createContext, useEffect, useState, useMemo } from "react";
const apiurl = import.meta.env.VITE_API_URL

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const [games, setGames] = useState([])
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")

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
        return games.filter(g => {
            const matchSearch = g.title
                .toLowerCase()
                .includes(search.toLowerCase())

            const matchCategory =
                category === "All" || g.category === category

            return matchSearch && matchCategory
        })
    }, [games, search, category])

    return (
        <GlobalContext.Provider value={{ games, filteredGames, search, setSearch, category, setCategory }}>
            {children}
        </GlobalContext.Provider>
    )
}