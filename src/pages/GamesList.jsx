import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function GamesList() {

    const { games } = useContext(GlobalContext)

    return (
        <div>
            lista giochi
        </div>
    )
}