import { createContext, useEffect, useState } from "react";
const apiurl = import.meta.env.VITE_API_URL

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const [games, setGames] = useState([])

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

    return (
        <GlobalContext.Provider value={{ games }}>
            {children}
        </GlobalContext.Provider>
    )
}