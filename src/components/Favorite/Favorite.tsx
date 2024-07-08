import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ProductCard from '../Dashboard/ProductCard/ProductCard';
import { setDragProductId } from '../../store/favoriteSlice';
import { CenterContainer } from '../General/Modal/ModalStyles';
import { FavoriteContainer, FavoriteStyles } from './FavoriteStyles';

interface FavoriteProps {
  onImageMove: (
    imageId: string,
    fromContainer: string,
    toContainer: string
  ) => void;
  containerName: string;
}

const Favorite = ({ containerName, onImageMove }: FavoriteProps) => {
  const dispatch = useDispatch();
  const { favoriteProducts, dragProductId } = useSelector(
    (state: RootState) => state.reducer.favorite
  );

  const dropProductHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedImageId = e.dataTransfer?.getData('text/plain');
    if (droppedImageId && dragProductId) {
      onImageMove(
        droppedImageId,
        containerName,
        containerName === 'products' ? 'favorite' : 'products'
      );
      dispatch(setDragProductId(null));
    }
  };

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.dataTransfer?.setData('text/plain', id);
    dispatch(setDragProductId(id));
  };

  const onDragEndHandler = () => {
    dispatch(setDragProductId(null));
  };

  return (
    <FavoriteStyles onDrop={dropProductHandler} onDragOver={dragOverHandler}>
      <span>Drag and drop to add your favourites</span>
      <FavoriteContainer>
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              dragStartHandler={dragStartHandler}
              draggedImageId={dragProductId}
              onDragEndHandler={onDragEndHandler}
            />
          ))
        ) : (
          <CenterContainer>No favorite products</CenterContainer>
        )}
      </FavoriteContainer>
    </FavoriteStyles>
  );
};

export default Favorite;
