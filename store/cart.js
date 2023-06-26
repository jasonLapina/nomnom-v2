import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        const existingIndex = state.indexOf(existingItem);
        state[existingIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          price: existingItem.price + action.payload.price,
        };
      } else state.push({ ...action.payload, quantity: 1 });
    },
    clearCart(state) {
      return (state = []);
    },
  },
});

const orderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push({
        orderId: `Order ID: ${Date.now()}`,
        items: [...action.payload],
      });
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    orders: orderSlice.reducer,
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export const { addOrder } = orderSlice.actions;
export default store;
