export default function ProductCard({ product, onToggleFavorite }) {
    const { id, name, price, category, image, isFavorite } = product;

    return (
        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <p className="category">{category}</p>
            <button onClick={() => onToggleFavorite(id)}>
                {isFavorite ? '❤️' : '🤍'}
            </button>
        </div>
    )
}