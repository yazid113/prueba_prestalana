import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './dashboardSlice';

type CartState = {
  items: { item: Product; quantity: number }[];
  totalQuantity: number;
  totalPrice: number;
  isCartOpen: boolean;
};

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.item.id === newItem.id
      );

      state.totalQuantity++;
      state.totalPrice += newItem.price;

      if (!existingItem) {
        state.items.push({ item: newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.totalPrice -= existingItem.item.price;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },
    deleteItem(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.item.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.item.id !== id);
      }
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { addItem, removeItem, deleteItem, toggleCart } =
  cartSlice.actions;
export default cartSlice.reducer;
