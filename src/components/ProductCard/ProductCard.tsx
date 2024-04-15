import { FaCartShopping } from "react-icons/fa6";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/slice/cartSlice";
import toast from "react-hot-toast";

interface CardProps {
  id: number;
  title: string;
  title2?: string;
  title3?: string;
  subtitle: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const ProductCard: React.FC<CardProps> = ({
  id,
  title,
  title2,
  title3,
  subtitle,
  description,
  price,
  quantity,
  image,
  onIncrease,
  onDecrease,
}) => {
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    const payload = {
      id,
      subtitle,
      price,
      quantity,
      image,
      delivery: "",
    };
    dispatch(addToCart(payload));
    toast.success("Added to cart");
  };

  return (
    <div
      id={id.toString()}
      className="bg-[#E6E5E5] w-64 h-80 rounded-tr-3xl rounded-bl-3xl shadow-lg p-6 m-auto"
    >
      <div className="relative rounded-lg shadow-lg">
        <img
          src={image}
          alt={title}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-4 -mt-8 -mr-8  object-cover"
        />
      </div>
      <div className="flex items-center gap-1 justify-center">
        <div className="text-center mt-20">
          <span className="text-[10px] rounded-full inline-block bg-[#F1E9C9] text-[#C47F17] px-3 py-1 font-semibold uppercase">
            {title}
          </span>
        </div>

        <div className="text-center mt-20">
          {title2 && (
            <span className="text-[10px] rounded-full inline-block bg-[#F1E9C9] text-[#C47F17] px-2 py-1 font-semibold uppercase">
              {title2}
            </span>
          )}
        </div>

        <div className="text-center mt-20">
          {title3 && (
            <span className="text-[10px] rounded-full inline-block bg-[#F1E9C9] text-[#C47F17] px-3 py-1 font-semibold uppercase">
              {title3}
            </span>
          )}
        </div>
      </div>

      <h3
        className="text-[20px] text-center font-bold pt-4 pb-2"
        style={{ fontFamily: "'Baloo 2', sans-serif" }}
      >
        {subtitle}
      </h3>

      <p className="text-zinc-500 mb-8 text-center text-sm">{description}</p>

      <div className="flex items-center justify-between">
        <p
          className="font-bold text-2xl"
          style={{ fontFamily: "'Baloo 2', sans-serif" }}
        >
          <span className="text-sm font-normal pr-1">R$</span>
          {price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-zinc-300 px-1  rounded-md">
            <button
              onClick={onDecrease}
              className="text-[#4B2995] text-4xl  px-2"
            >
              -
            </button>
            <span className="px-1 py-1">{quantity}</span>
            <button
              onClick={onIncrease}
              className="text-[#4B2995] text-lg px-2"
            >
              +
            </button>
          </div>

          <div>
            <button
              onClick={addToCartHandler}
              className=" bg-[#4B2995] text-white px-3 py-2.5 rounded-md hover:bg-[#614c8f]"
            >
              <FaCartShopping size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
