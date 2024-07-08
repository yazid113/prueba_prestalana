import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import {
  CartContent,
  CartFooter,
  CartHeader,
  CartTotal,
  CartWrapper,
  CheckoutButton,
  CloseButton,
} from './CartStyles';
import { RootState } from '../../../store/store';
import { converNumberToCurrency } from '../../../util/helpers';
import { toggleCart } from '../../../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice, totalQuantity } = useSelector(
    (state: RootState) => state.reducer.cart
  );
  const closeCartHandler = () => {
    dispatch(toggleCart());
  };
  return (
    <CartWrapper>
      <CartHeader>
        <h4>Cart({totalQuantity})</h4>
        <CloseButton onClick={closeCartHandler}>X</CloseButton>
      </CartHeader>
      <CartContent>
        {items.length > 0 ? (
          items.map((cartItem) => (
            <CartItem key={cartItem.item.id} cartItem={cartItem} />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </CartContent>
      <CartFooter>
        <CartTotal>
          <span>Total</span>
          <span>{converNumberToCurrency(totalPrice)}</span>
        </CartTotal>
        <CheckoutButton>Buy Now</CheckoutButton>
      </CartFooter>
    </CartWrapper>
  );
};

export default Cart;
