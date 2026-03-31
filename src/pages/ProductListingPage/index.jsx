import "./index.css";
import ProductCard from "../../components/ProductCard";

export default function ProductListingPage() {
  const products = [
    {
      id: 1,
      image: "/collection-1.png",
      name: "Tênis Nike Revolution 6",
      price: "219,90",
      oldPrice: "299,90",
    },
    {
      id: 2,
      image: "/collection-2.png",
      name: "Tênis Adidas Duramo",
      price: "199,90",
    },
    {
      id: 3,
      image: "/collection-3.png",
      name: "Tênis Puma Flyer",
      price: "249,90",
    },
    {
      id: 4,
      image: "/collection-4.png",
      name: "Tênis Mizuno Wave",
      price: "289,90",
      oldPrice: "349,90",
    },
  ];

  return (
    <div className="product-listing">
      <h2 className="product-listing__title">Produtos em destaque</h2>

      <div className="product-listing__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </div>
  );
}
