import { Link, useParams } from "react-router-dom"

export default function CardDetailsPage({ game }) {

    return (
        <>
            {game && (
                <div className="details-page">
                    <div className="details-card">
                        <div className="details-content">
                            <h2 className="game-title">Titolo: {game.title}</h2>
                            <p className="game-desc">Descrizione: {game.description}</p>
                            <p className="game-dev"><strong>Sviluppatori:</strong> {game.developer}</p>
                            <p className="game-price"><strong>Prezzo:</strong> {game.price ?? "N/A"}</p>
                            <p className="game-rating"><strong>Valutazione:</strong> {game.rating ?? "N/A"}</p>
                            <Link to="/" className="back-link">Torna ai giochi</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}