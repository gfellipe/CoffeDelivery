import { FaLocationDot, FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/Logo.png";
import { useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";

export const Header = ({ setOpenCart }: any) => {
  const count = useAppSelector((store) => store.cart.length);

  return (
    <nav className="flex items-center justify-between mx-auto max-w-6xl mt-12 space-y-6 px-5">
      <Link to={"/"}>
        <img src={Logo} alt="CoffeDelivery" />
      </Link>

      <ul className="flex items-center">
        <li className="flex items-center gap-1 text-purple-700 text-sm bg-purple-100 p-2.5 rounded-md">
          <FaLocationDot /> Porto Alegre, RS
        </li>
        <li className="relative">
          <FaCartShopping
            className="text-amber-700 text-md cursor-pointer ml-2 "
            size={25}
            onClick={() => setOpenCart(true)}
          />
          {count > 0 && (
            <div className="absolute -top-2 -right-2 bg-[#f3487b] w-4 h-4 rounded-full text-white text-sm flex items-center justify-center">
              {count}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
