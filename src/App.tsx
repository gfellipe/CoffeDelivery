// COMPONENTS
import { useState } from "react";
import { Home } from "./Pages/Home/Home";
import { Header } from "./components/Header/Header";

// LIBS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Toaster } from "react-hot-toast";
import { ConfirmAddress } from "./Pages/ConfirmAddress/ConfirmAddress";
import { OrderSummaryPage } from "./Pages/OrderSummaryPage/OrderSummaryPage";

export const App = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Header setOpenCart={setOpenCart} />
        {openCart && <Cart setOpenCart={setOpenCart} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirm-address" element={<ConfirmAddress />} />
          <Route path="/resumo-pedido" element={<OrderSummaryPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};
