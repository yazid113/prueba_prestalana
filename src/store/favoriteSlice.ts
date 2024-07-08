import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './dashboardSlice';

type FavoriteState = {
  isLoading: boolean;
  favoriteProducts: Product[];
  error: string | undefined;
  dragProductId: string | null;
  imageId: string | null;
  isConfirmModalOpen: boolean;
};

const initialState: FavoriteState = {
  isLoading: false,
  favoriteProducts: [],
  error: undefined,
  dragProductId: null,
  imageId: null,
  isConfirmModalOpen: false,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    fetchFavoriteStart(state) {
      state.isLoading = true;
    },
    fetchFavoriteSuccess(state, action: PayloadAction<Product[]>) {
      state.favoriteProducts = action.payload;
      state.isLoading = false;
      state.error = undefined;
    },
    fetchFavoriteFailure(state, action: PayloadAction<string>) {
      state.favoriteProducts = [];
      state.isLoading = false;
      state.error = action.payload;
    },
    addFavorite(state, action: PayloadAction<Product>) {
      if (
        state.favoriteProducts.find(
          (product) => product.id === action.payload.id
        )
      ) {
        return;
      }
      state.favoriteProducts.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favoriteProducts = state.favoriteProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    setDragProductId(state, action: PayloadAction<string | null>) {
      state.dragProductId = action.payload;
    },
    toggleConfirmModal(state, action: PayloadAction<string | null>) {
      state.isConfirmModalOpen = !state.isConfirmModalOpen;
      state.imageId = action.payload;
    },
  },
});

export const {
  fetchFavoriteFailure,
  fetchFavoriteSuccess,
  fetchFavoriteStart,
  addFavorite,
  removeFavorite,
  setDragProductId,
  toggleConfirmModal,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
