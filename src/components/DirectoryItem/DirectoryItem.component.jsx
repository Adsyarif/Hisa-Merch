import { useContext, useNavigate } from "react";
import { UserContext } from "../../contexts";
import "./DirectoryItem.style.scss";
import { Link } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const { currentUser } = useContext(UserContext);

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        {currentUser ? <p>Shop Now</p> : <p>Login to Shop</p>}
      </div>
    </div>
  );
};
export default DirectoryItem;
