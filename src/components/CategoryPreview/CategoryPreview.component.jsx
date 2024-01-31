import "./category-preview.styles.scss";
import { ProductCard } from "../index";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          Go to {title.toUpperCase()} Collection
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => {
            return idx < 4;
          })
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
