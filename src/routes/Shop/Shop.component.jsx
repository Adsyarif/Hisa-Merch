import { useContext } from "react";
import { ProductsContext } from "../../contexts";
import { ProductCard } from "../../components";
import "./Shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
