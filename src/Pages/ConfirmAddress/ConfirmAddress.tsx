import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";
import { TfiMoney } from "react-icons/tfi";
import {
  FaRegCreditCard,
  FaCreditCard,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

export const ConfirmAddress = () => {
  const navigate = useNavigate();

  const [addressData, setAddressData] = useState({
    endereco: "",
    bairro: "",
    cidade: "",
  });
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");

  const handleCepChange = async (event: { target: { value: string } }) => {
    const cep = event.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        setAddressData({
          endereco: response.data.logradouro,
          bairro: response.data.bairro,
          cidade: response.data.localidade,
        });
      } catch (error) {
        console.error("Erro ao obter o CEP:", error);
        setAddressData({
          endereco: "",
          bairro: "",
          cidade: "",
        });
      }
    }
  };

  const handleConfirmarPedido = () => {
    if (addressData.endereco && numero && complemento && pagamento) {
      navigate("/resumo-pedido", {
        state: { addressData, numero, complemento, pagamento },
      });
    } else {
      alert("Por favor, preencha todos os campos antes de confirmar o pedido.");
    }
  };

  return (
    <div className="mx-auto max-w-xl mt-6 space-y-6 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-xl">Complete seu pedido</h1>

      <div className="bg-gray-100 rounded-lg p-6">
        <div className="mb-6">
          <h2 className="flex items-center text-lg font-semibold text-gray-700">
            <CiLocationOn className="text-yellow-500 mr-2" /> Endereço de
            Entrega
          </h2>
          <p className="text-sm text-gray-600">
            Informe o endereço onde deseja receber seu pedido.
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="cep"
                className="block text-sm font-medium text-gray-700"
              >
                CEP
              </label>
              <input
                type="text"
                id="cep"
                name="cep"
                placeholder="Digite o CEP"
                onChange={handleCepChange}
                className="mt-1 block w-full rounded-md bg-gray-200 border-0 px-3 py-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="endereco"
                className="block text-sm font-medium text-gray-700"
              >
                Endereço
              </label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                placeholder="Digite seu endereço"
                value={addressData.endereco}
                onChange={(e) =>
                  setAddressData({ ...addressData, endereco: e.target.value })
                }
                className="mt-1 block w-full rounded-md bg-gray-200 border-0 px-3 py-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="numero"
                className="block text-sm font-medium text-gray-700"
              >
                Número
              </label>
              <input
                type="text"
                id="numero"
                name="numero"
                placeholder="Nº"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                className="mt-1 block w-full rounded-md bg-gray-200 border-0 px-3 py-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="complemento"
                className="block text-sm font-medium text-gray-700"
              >
                Complemento
              </label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                placeholder="Apartamento, casa, etc."
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                className="mt-1 block w-full rounded-md bg-gray-200 border-0 px-3 py-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="bg-gray-100 rounded-lg p-6">
        <div className="mb-6">
          <h2 className="flex items-center text-lg font-semibold text-gray-700">
            <TfiMoney className="text-violet-500 mr-2" /> Pagamento
          </h2>
          <p className="text-sm text-gray-600">
            Escolha a forma que deseja pagar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <button
            onClick={() => {
              setPagamento("Cartão de crédito");
              setSelectedPaymentOption("Cartão de crédito");
            }}
            className={`flex items-center justify-center gap-2 bg-[#dbd9d9] rounded p-3 shadow-md ${
              selectedPaymentOption === "Cartão de crédito"
                ? "bg-violet-300"
                : ""
            }`}
          >
            <FaRegCreditCard className="text-violet-500" />
            Cartão de crédito
          </button>
          <button
            onClick={() => {
              setPagamento("Cartão de débito");
              setSelectedPaymentOption("Cartão de débito");
            }}
            className={`flex items-center justify-center gap-2 bg-[#dbd9d9]  rounded p-3 shadow-md ${
              selectedPaymentOption === "Cartão de débito"
                ? "bg-violet-300"
                : ""
            }`}
          >
            <FaCreditCard className="text-violet-500" />
            Cartão de débito
          </button>
          <button
            onClick={() => {
              setPagamento("Dinheiro");
              setSelectedPaymentOption("Dinheiro");
            }}
            className={`flex items-center justify-center gap-2 bg-[#dbd9d9] rounded p-3 shadow-md ${
              selectedPaymentOption === "Dinheiro" ? "bg-violet-300" : ""
            }`}
          >
            <FaRegMoneyBillAlt className="text-violet-500" />
            Dinheiro
          </button>
        </div>
      </div>

      <button
        onClick={handleConfirmarPedido}
        className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded w-full"
      >
        Confirmar Pedido
      </button>
    </div>
  );
};
