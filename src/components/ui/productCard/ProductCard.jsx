import ButtonCard from "../buttonCard/ButtonCard"
import ProductStars from "../productStars/ProductStars"
import { useDispatch } from "react-redux"
import { cartAdd, favouriteAdd } from "../../../store/productCardSlice"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const cartAdds = () => {
    const id = product.id;
    dispatch(cartAdd({ id }));
  };

  const favouriteAdds = () => {
    const id = product.id;
    dispatch(favouriteAdd({ id }));
  };

  const cartButtonStyle = {
    border: 'solid',
    borderWidth: '2px',
    borderColor: product.isCart ? 'green' : 'transparent',
    borderRadius: '25px',
  };

  const favouriteButtonStyle = {
    border: 'solid',
    borderWidth: '2px',
    borderColor: product.class === 'favorite' ? 'red' : 'transparent',
    borderRadius: '25px',
  };

  return (
    <div className="w-[600px] mx-auto flex shadow-lg mb-5 p-2">
      <div className="w-[200px] h-[200px]">
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <h4>{product.name}</h4>
        <div>
          <span>{product.price}</span>
          <div className="flex text-center items-center">
            <ProductStars stars={product.reviewStars} />
            <span className="text-xs">({product.reviewsQty})</span>
          </div>
        </div>
        <div>{product.desc}</div>
        <div className="flex gap-3 m-2">
          <button onClick={() => cartAdds()} style={cartButtonStyle}>
            <ButtonCard id={product.id} img={'IoCartOutline'} />
          </button>
          <button onClick={() => favouriteAdds()} style={favouriteButtonStyle}>
            <ButtonCard id={product.id} img={'CiHeart'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
