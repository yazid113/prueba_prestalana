import { useEffect } from 'react';
import useDashboard from '../../hooks/useDashboard';
import Products from '../../components/Dashboard/Products/Products';
import Cart from '../../components/Dashboard/Cart/Cart';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Modal, { ModalPosition } from '../../components/General/Modal/Modal';
import { DashboardStyles } from './DashboardStyles';
import Favorite from '../../components/Favorite/Favorite';
import {
  addFavorite,
  removeFavorite,
  toggleConfirmModal,
} from '../../store/favoriteSlice';
import ConfirmationModal from '../../components/Dashboard/ConfirmationModal/ConfirmationModal';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { getProducts, getFavorites, toggleFavorite } = useDashboard();
  const { user } = useSelector((state: RootState) => state.reducer.auth);
  const { isCartOpen } = useSelector((state: RootState) => state.reducer.cart);
  const { products } = useSelector(
    (state: RootState) => state.reducer.dashboard
  );
  const { favoriteProducts, isConfirmModalOpen, imageId } = useSelector(
    (state: RootState) => state.reducer.favorite
  );

  const onImageMove = async (
    imageId: string,
    fromContainer: string,
    toContainer: string
  ) => {
    if (fromContainer === toContainer) return;
    if (fromContainer !== 'products') {
      const product = products.find((product) => product.id === +imageId);
      if (product) {
        dispatch(addFavorite(product));
        const newFavoriteProducts = [...favoriteProducts, product];
        await toggleFavorite(user?.id.toString() || '', newFavoriteProducts);
      }
    } else {
      dispatch(toggleConfirmModal(imageId));
    }
  };

  const confirmHandler = async () => {
    console.log(imageId);

    if (!imageId) return;
    const newFavoriteProducts = favoriteProducts.filter(
      (product) => product.id !== +imageId
    );
    dispatch(removeFavorite(+imageId));
    await toggleFavorite(user?.id.toString() || '', newFavoriteProducts);
    dispatch(toggleConfirmModal(null));
  };

  const cancelHandler = () => {
    dispatch(toggleConfirmModal(null));
  };

  useEffect(() => {
    getProducts();
    getFavorites(user?.id.toString() || '');
  }, []);

  return (
    <>
      {isCartOpen && (
        <Modal modalPosition={ModalPosition.FlexEnd}>
          <Cart />
        </Modal>
      )}
      {isConfirmModalOpen && (
        <ConfirmationModal
          onConfirm={confirmHandler}
          onCancel={cancelHandler}
        />
      )}
      <Layout>
        <DashboardStyles>
          <Products onImageMove={onImageMove} containerName={'products'} />
          <Favorite onImageMove={onImageMove} containerName={'favorite'} />
        </DashboardStyles>
      </Layout>
    </>
  );
};

export default Dashboard;
