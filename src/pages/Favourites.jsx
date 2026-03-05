import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function Favourites() {

    const { favList, clearFav, removeFav } = useContext(GlobalContext)
    console.log(favList);


    return (
        <h1>preferiti</h1>
    )
}