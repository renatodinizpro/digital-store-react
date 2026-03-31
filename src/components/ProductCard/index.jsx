import "./index.css";
import { Link } from "react-router-dom";

export default function ProductCard({ id, image, name, price, oldPrice }) {
  return (
    <Link to={`/product/${id}`} className="product-card">
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
    </Link>
  );
}
