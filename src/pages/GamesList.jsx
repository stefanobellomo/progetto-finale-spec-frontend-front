import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import CardMainPage from "../components/CardMainPage"

export default function GamesList() {

    const { games } = useContext(GlobalContext)

    return (
        <div>
            {
                games.map(g => (
                    <CardMainPage key={g.id} g={g} />
                ))
            }
        </div>
    )
}