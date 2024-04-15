import { IoCart } from "react-icons/io5";
import { PiCoffeeFill } from "react-icons/pi";
import { PiTimerFill } from "react-icons/pi";
import { BsFillBoxSeamFill } from "react-icons/bs";

import HeroImage from "../../assets/Hero.png";

export const Hero = () => {
  return (
    <main className="mx-auto max-w-6xl my-16 space-y-6 px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="text-center md:text-left">
        <h2
          className="leading-[60px] text-[45px] font-bold"
          style={{ fontFamily: "'Baloo 2', sans-serif" }}
        >
          Encontre o café perfeito para qualquer hora do dia
        </h2>
        <p className="text-lg pt-2 pb-16">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <p className="flex items-center gap-2">
            <IoCart className="bg-amber-600 text-white rounded-full p-2 text-[32px]" />
            <span className="text-[15px]">Compra simples e segura</span>
          </p>

          <p className="flex items-center gap-2">
            <BsFillBoxSeamFill className="bg-zinc-600 text-white rounded-full p-2 text-[32px]" />
            <span className="text-[15px]">Embalagem mantém o café intacto</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 pt-5">
          <p className="flex items-center gap-2">
            <PiTimerFill className="bg-yellow-500 text-white rounded-full p-2 text-[32px]" />
            <span className="text-[14.5px]">Entrega rápida e rastreada</span>
          </p>

          <p className="flex items-center gap-2">
            <PiCoffeeFill className="bg-violet-600 text-white rounded-full p-2 text-[32px]" />
            <span className="text-[15px]">
              O café chega fresquinho até você
            </span>
          </p>
        </div>
      </div>

      <div className="text-center md:text-right">
        <img
          src={HeroImage}
          alt="Café com alguns grãos ao redor"
          className="w-full md:w-[460px] max-w-[460px] mx-auto md:mx-0"
        />
      </div>
    </main>
  );
};
