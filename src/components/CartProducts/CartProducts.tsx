import { FaRegTrashAlt } from "react-icons/fa";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/slice/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

interface propsType {
  id: number;
  image: string;
  subtitle: string;
  price: number;
  quantity: number;
  delivery: "3,50";
}

export const CartProducts: React.FC<propsType> = ({
  id,
  image,
  subtitle,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  const newPrice = Math.ceil(price * 0.9);

  const onDecrease = () => {
    dispatch(decreaseQuantity(id));
  };

  const onIncrease = () => {
    dispatch(increaseQuantity(id));
  };

  return (
    <div className="flex justify-between items-center border-[1px] border-t-zinc-300 pt-6">
      <div className="flex items-center gap-4 mb-10">
        <img src={image} alt="" className="h-[50px]" />
        <div className="space-y-1 ">
          <h2>{subtitle}</h2>
          <div className="flex items-center">
            <div className="flex items-center bg-gray-200 px-2 rounded-md">
              <button
                onClick={onDecrease}
                className="text-[#4B2995] text-2xl  px-2"
              >
                -
              </button>
              <span className="px-1 py-1">{quantity}</span>
              <button
                onClick={onIncrease}
                className="text-[#4B2995] text-md px-1"
              >
                +
              </button>
            </div>
            <div className="flex items-center bg-gray-200 px-1 py-[6px] ml-3 text-[#4B2995] rounded-md">
              <FaRegTrashAlt
                onClick={() => dispatch(removeFromCart(id))}
                className="flex items-center cursor-pointer pr-1"
              />
              <div
                className="text-sm cursor-pointer"
                onClick={() => dispatch(removeFromCart(id))}
              >
                REMOVER
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>
        {newPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
};
