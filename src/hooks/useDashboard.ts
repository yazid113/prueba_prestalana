import { useDispatch } from 'react-redux';
import { axiosRequest, axiosRequestFavorites } from '../service/axios';
import {
  fetchProductsFailure,
  fetchProductsSuccess,
  fetchProductsStart,
  Product,
} from '../store/dashboardSlice';
import {
  fetchFavoriteStart,
  fetchFavoriteSuccess,
  fetchFavoriteFailure,
} from '../store/favoriteSlice';

const useDashboard = () => {
  const dispatch = useDispatch();

  const getProducts = async () => {
    dispatch(fetchProductsStart());
    try {
      const response = await axiosRequest.get('products', {
        params: { limit: 9 },
      });
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsFailure('Failed to fetch products'));
    }
  };

  const getFavorites = async (userId: string) => {
    dispatch(fetchFavoriteStart());
    try {
      const response = await axiosRequestFavorites.get(
        `/favoriteItems/${userId}`
      );
      dispatch(fetchFavoriteSuccess(response.data.favorite));
    } catch (error) {
      dispatch(fetchFavoriteFailure('Failed to fetch favorites'));
    }
  };

  const toggleFavorite = async (userId: string, products: Product[]) => {
    const newFavorite = {
      favorite: products,
      id: userId,
    };
    try {
      await axiosRequestFavorites.put(`/favoriteItems/${userId}`, newFavorite);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getProducts,
    getFavorites,
    toggleFavorite,
  };
};

export default useDashboard;
