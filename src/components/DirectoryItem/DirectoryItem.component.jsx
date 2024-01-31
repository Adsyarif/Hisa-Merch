import { useContext, useNavigate } from "react";
import { UserContext } from "../../contexts";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./DirectoryItem.style";
import { Link } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const { currentUser } = useContext(UserContext);

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        {currentUser ? <p>Shop Now</p> : <p>Login to Shop</p>}
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
