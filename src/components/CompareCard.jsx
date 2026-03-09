export default function CompareCard({ g }) {
    return (
        <div key={g.id} className="compare-card">
            <h3 className="game-title">{g.title}</h3>
            <p>Categoria: {g.category}</p>
            <p>Prezzo: {g.price}€</p>
            <p>Valutazione: {g.rating}</p>
        </div>
    )
}