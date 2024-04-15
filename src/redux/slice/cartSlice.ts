import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Products {
  delivery: number;
  id: number;
  subtitle: string;
  image: string;
  price: number;
  quantity: number;
}

const initialState: Products[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        state.push(action.payload);
      } else {
        state[index].quantity++;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1 && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index].quantity++;
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
