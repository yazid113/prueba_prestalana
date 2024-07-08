import Searchbox from '../Searchbox/Searchbox';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ProductCard from '../ProductCard/ProductCard';
import { ProductsList, ProductsWrapper } from './ProductsStyles';
import { setDragProductId } from '../../../store/favoriteSlice';

interface ProductsProps {
  onImageMove: (
    imageId: string,
    fromContainer: string,
    toContainer: string
  ) => void;
  containerName: string;
}

const Products = ({ containerName, onImageMove }: ProductsProps) => {
  const dispatch = useDispatch();
  const { products, loading, searchQuery } = useSelector(
    (state: RootState) => state.reducer.dashboard
  );
  const { favoriteProducts, dragProductId } = useSelector(
    (state: RootState) => state.reducer.favorite
  );
  const filteredProducts = products.filter(
    (product) =>
      (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
      !favoriteProducts.find((favProduct) => favProduct.id === product.id)
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
    <ProductsWrapper>
      <Searchbox />
      <ProductsList onDrop={dropProductHandler} onDragOver={dragOverHandler}>
        {!loading ? (
          filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                dragStartHandler={dragStartHandler}
                draggedImageId={dragProductId}
                onDragEndHandler={onDragEndHandler}
              />
            ))
          ) : (
            <p>No products found</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </ProductsList>
    </ProductsWrapper>
  );
};

export default Products;
