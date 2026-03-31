import { useParams } from "react-router-dom";

const ProductViewPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product View Page</h2>
      <p>Produto ID: {id}</p>
    </div>
  );
};

export default ProductViewPage;
