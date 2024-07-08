import TrashCan from '../../General/Icons/TrashCan';
import { Product } from '../../../store/dashboardSlice';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem, removeItem } from '../../../store/cartSlice';
import Arrow from '../../General/Icons/Arrow';
import { converNumberToCurrency } from '../../../util/helpers';
import {
  CartItemWrapper,
  DeleteItemButton,
  ProductCartImage,
  ProductInfo,
  QuantitySection,
  ReverseArrow,
} from './CartItemStyles';

interface CartItemProps {
  cartItem: { item: Product; quantity: number };
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const firstTwoWords = cartItem.item.title.split(' ').slice(0, 2).join(' ');
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    dispatch(addItem(cartItem.item));
  };
  const removeItemFromCartHandler = () => {
    dispatch(removeItem(cartItem.item.id));
  };
  const deleteItemFromCart = () => {
    dispatch(deleteItem(cartItem.item.id));
  };
  return (
    <CartItemWrapper>
      <ProductCartImage src={cartItem.item.image} alt="cart item image" />
      <ProductInfo>
        <DeleteItemButton onClick={deleteItemFromCart}>
          <TrashCan />
        </DeleteItemButton>
        <span>{firstTwoWords}</span>
        <span>{converNumberToCurrency(cartItem.item.price)}</span>
        <QuantitySection>
          <ReverseArrow onClick={removeItemFromCartHandler}>
            <Arrow />
          </ReverseArrow>
          <span>{cartItem.quantity}</span>
          <DeleteItemButton onClick={addItemToCartHandler}>
            <Arrow />
          </DeleteItemButton>
        </QuantitySection>
      </ProductInfo>
    </CartItemWrapper>
  );
};

export default CartItem;
