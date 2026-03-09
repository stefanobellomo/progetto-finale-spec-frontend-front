export default function CompareCard({ g }) {
    return (
        <div key={g.id} className="compare-card">
            <h3 className="game-title">{g.title}</h3>
            <div>
                <span className="details-label">Categoria:</span>
                <span className="details-value">{g.category}</span>
            </div>
            <div>
                <span className="details-label">spanPrezzo:</span>
                <span className="details-value">{g.price}€</span>
            </div>
            <div>
                <span className="details-label">Valutazione:</span>
                <span className="details-value">{g.rating}</span>
            </div>
        </div>
    )
}