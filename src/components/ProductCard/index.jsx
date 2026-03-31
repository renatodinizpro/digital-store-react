import "./index.css";

export default function ProductCard({ image, name, price, oldPrice }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-card__image" />

      <div className="product-card__info">
        <p className="product-card__name">{name}</p>

        <div className="product-card__prices">
          {oldPrice && (
            <span className="product-card__old-price">R$ {oldPrice}</span>
          )}
          <span className="product-card__price">R$ {price}</span>
        </div>
      </div>
    </div>
  );
}
