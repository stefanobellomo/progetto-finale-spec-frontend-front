import { memo } from "react"

const CompareCard = memo(function CompareCard({ g }) {
    return (
        <div className="compare-card">
            <h3 className="compare-card-title">{g.title}</h3>

            <div className="compare-row">
                <span className="compare-label">Categoria:</span>
                <span className="compare-value">{g.category}</span>
            </div>

            <div className="compare-row">
                <span className="compare-label">Prezzo:</span>
                <span className="compare-value">{g.price}€</span>
            </div>

            <div className="compare-row">
                <span className="compare-label">Valutazione:</span>
                <span className="compare-value">{g.rating}</span>
            </div>
        </div>
    )
})

export default CompareCard