import { useDispatch } from 'react-redux';
import { Product } from '../../../store/dashboardSlice';
import { capitalize, converNumberToCurrency } from '../../../util/helpers';
import {
  AddToCartButton,
  CardWrapper,
  ProductImage,
  ProductInfo,
  ProductTitle,
} from './ProductCardStyles';
import { addItem } from '../../../store/cartSlice';

interface ProductCardProps {
  product: Product;
  dragStartHandler: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  draggedImageId: string | null;
  onDragEndHandler: () => void;
}

const ProductCard = ({
  product,
  dragStartHandler,
  draggedImageId,
  onDragEndHandler,
}: ProductCardProps) => {
  const dispatch = useDispatch();
  const firstTwoWords = product.title.split(' ').slice(0, 2).join(' ');
  const currency = converNumberToCurrency(product.price);
  const capitalizeCategory = capitalize(product.category);

  const addItemToCartHandler = () => {
    dispatch(addItem(product));
  };

  return (
    <CardWrapper>
      <ProductImage
        src={product.image}
        alt="Product image"
        onDragStart={(e) => dragStartHandler(e, product.id.toString())}
        draggable={draggedImageId === null}
        onDragEnd={onDragEndHandler}
      />
      <ProductInfo>
        <ProductTitle>{firstTwoWords}</ProductTitle>
        <ProductTitle>{currency}</ProductTitle>
        <ProductTitle>{capitalizeCategory}</ProductTitle>
      </ProductInfo>
      <AddToCartButton onClick={addItemToCartHandler}>
        Add to cart
      </AddToCartButton>
    </CardWrapper>
  );
};

export default ProductCard;
