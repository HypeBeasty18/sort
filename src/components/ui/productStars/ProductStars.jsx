import { IoIosStar, IoIosStarOutline } from "react-icons/io";



const ProductStars = ({ stars }) => {
  const maxStars = 5; 

  const renderStars = () => {
    const starArray = [];

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starArray.push(<IoIosStar color="orange" key={i} size={18}/>);
      } else {
        starArray.push(<IoIosStarOutline key={i} size={18} />);
      }
    }

    return starArray;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default ProductStars