import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type DashboardState = {
  products: Product[];
  searchQuery: string;
  loading: boolean;
  error: string | undefined;
};

const initialState: DashboardState = {
  products: [],
  searchQuery: '',
  loading: false,
  error: undefined,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      state.loading = false;
      state.error = undefined;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.products = [];
      state.loading = false;
      state.error = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  fetchProductsFailure,
  fetchProductsSuccess,
  fetchProductsStart,
  setSearchQuery,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
