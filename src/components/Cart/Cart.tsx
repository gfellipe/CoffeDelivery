import { useAppSelector } from "../../redux/hooks";
import { RxCross1 } from "react-icons/rx";
import { CartProducts } from "../CartProducts/CartProducts";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Cart = ({ setOpenCart }: any) => {
  const products = useAppSelector((store) => store.cart);
  const navigate = useNavigate();

  const getTotal = () => {
    let total = 0;
    products.forEach(
      (item) => (total += Math.ceil(item.price * 0.9) * item.quantity)
    );
    return total;
  };

  const delivery = 3.5;

  const getDeliveryTotal = () => {
    return delivery;
  };

  const totalItems = getTotal();
  const totalDelivery = getDeliveryTotal();
  const total = totalItems + totalDelivery;

  useEffect(() => {
    const handleCloseCart = () => {
      setOpenCart(false);
    };

    return () => {
      handleCloseCart();
    };
  }, [setOpenCart]);

  const handleConfirmOrder = () => {
    setOpenCart(false);
    navigate("/confirm-address");
  };

  return (
    <div className="fixed left-0 top-0 z-20 overflow-y-scroll w-full min-h-screen">
      <div className="max-w-[400px] w-full min-h-full bg-[#ebe9e9] absolute right-0 top-0 p-6">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-2xl cursor-pointer"
          onClick={() => setOpenCart(false)}
        />
        <h3 className="pt-3 pb-10 font-bold text-gray-600">
          Cafés selecionados
        </h3>
        <div>
          {products?.map((item) => (
            <CartProducts
              key={item.id}
              id={item.id}
              image={item.image}
              subtitle={item.subtitle}
              price={item.price}
              quantity={item.quantity}
              delivery={"3,50"}
            />
          ))}
        </div>
        <div className="flex justify-between items-center text-md border-[1px] border-t-zinc-300 pt-8">
          <p className="pb-3 text-sm">Total de itens</p>
          <p>
            {totalItems.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div className="flex justify-between items-center text-md ">
          <p className="pb-3 text-sm">Entrega</p>
          <p>
            {totalDelivery.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div className="flex justify-between items-center text-md">
          <p className="font-bold text-xl">Total</p>
          <p className="font-bold">
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div>
          <button
            className="bg-yellow-500 text-white font-bold text-center w-full rounded-md py-2 hover:bg-amber-500 my-6 uppercase"
            onClick={handleConfirmOrder}
          >
            confirmar pedido
          </button>
        </div>
      </div>
    </div>
  );
};
