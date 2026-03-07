import { Link } from "react-router-dom"

export default function CardDetailsPage({ game }) {
    if (!game) return null

    return (
        <div className="details-page">
            <div className="details-card">
                <div className="details-header">
                    <h1 className="game-title">{game.title}</h1>
                </div>

                <p className="game-desc">
                    {game.description || "Descrizione non disponibile."}
                </p>

                <div className="details-info">
                    <div className="details-row">
                        <span className="details-label">Sviluppatori</span>
                        <span className="details-value">{game.developer || "N/A"}</span>
                    </div>

                    <div className="details-row">
                        <span className="details-label">Prezzo</span>
                        <span className="details-value">{game.price ?? "N/A"}</span>
                    </div>

                    <div className="details-row">
                        <span className="details-label">Valutazione</span>
                        <span className="details-value">{game.rating ?? "N/A"}</span>
                    </div>
                </div>

                <div className="details-actions">
                    <Link to="/" className="back-link">
                        Torna ai giochi
                    </Link>
                </div>
            </div>
        </div>
    )
}