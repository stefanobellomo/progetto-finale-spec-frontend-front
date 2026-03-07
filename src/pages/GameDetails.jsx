import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CardDetailsPage from "../components/CardDetailsPage"

const apiurl = import.meta.env.VITE_API_URL

export default function GamesDetails() {
    const { id } = useParams()
    const [game, setGame] = useState(null)

    const fetchDetails = async () => {
        try {
            const response = await fetch(`${apiurl}/games/${id}`)
            const data = await response.json()
            return setGame(data.game)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchDetails()
    }, [])

    return (
        <>
            <div>
                <div>
                    {game && (
                        <CardDetailsPage game={game} />
                    )}
                </div>
            </div>
        </>
    )
}