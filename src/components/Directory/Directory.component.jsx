import DirectoryItem from "../DirectoryItem/DirectoryItem.component";
import { DirectoryContainer } from "./Directory.style";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl:
      "https://img.freepik.com/free-photo/view-composition-with-neatly-arranged-organized-sport-items_23-2150275226.jpg?t=st=1718019395~exp=1718022995~hmac=39d43fa5bb4ba3e1c24c06a8ff59910064dad9682f043f53f0dcc633f0dbdf14&w=740",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://img.freepik.com/free-photo/portrait-boy-wearing-green-jacket_23-2148478809.jpg?t=st=1718019659~exp=1718023259~hmac=c777c2d917561ebd69d57709d5d945e3dba333f7dd152850a96ab25db82c41d8&w=900",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl:
      "https://img.freepik.com/premium-photo/men-s-feet-white-everyday-sneakers-made-natural-leather-lacing_173815-19115.jpg?w=740",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl:
      "https://img.freepik.com/free-photo/beautiful-woman-wearing-hijab_23-2149288967.jpg?t=st=1718019776~exp=1718023376~hmac=b6d9b4d896c769bbe8705361253896e9c8504f2b80b214def8e672cf903c9f83&w=740",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl:
      "https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?t=st=1718019930~exp=1718023530~hmac=a66fe04b04c0fc471465a526ea72cb62b45a90c1a4bc2c61f4209d2db8058996&w=1800",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
