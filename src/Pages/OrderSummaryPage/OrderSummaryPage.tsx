import { IoLocationSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { LuTimer } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import IllustrationImage from "../../assets/Illustration.png";

export const OrderSummaryPage = () => {
  const location = useLocation();
  const { addressData, numero, pagamento } = location.state;

  return (
    <div className="mx-auto max-w-5xl mt-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="font-bold text-2xl sm:text-3xl text-amber-600">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-base sm:text-lg">
            Agora é só aguardar que logo o café chegará até você
          </p>

          <div className="border border-indigo-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <IoLocationSharp className="bg-violet-600 text-white rounded-full p-2 text-2xl mr-4" />
              <div>
                <p className="font-bold">
                  Entrega em {addressData.endereco}, {numero}
                </p>
                <p>
                  {addressData.bairro} - {addressData.cidade}
                </p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <LuTimer className="bg-yellow-500 text-white rounded-full p-2 text-2xl mr-4" />
              <div>
                <p className="font-bold">Previsão de entrega</p>
                <p>20 min - 30 min</p>
              </div>
            </div>

            <div className="flex items-center">
              <MdOutlineAttachMoney className="bg-amber-600 text-white rounded-full p-2 text-2xl mr-4" />
              <div>
                <p className="font-bold">Pagamento na entrega</p>
                <p>{pagamento}</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={IllustrationImage}
          alt="homem em cima de uma moto indo fazer entrega"
          className="mt-8 sm:mt-0 justify-self-center"
        />
      </div>
    </div>
  );
};
