import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const ButtonCard = ({ img }) => {
  const IconComponent = img === 'IoCartOutline' ? IoCartOutline : CiHeart;

  return (
    <div className="shadow-md	flex rounded-[25px] p-2 ">
      <IconComponent size={22} />
    </div>
  );
}

export default ButtonCard;
