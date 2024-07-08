import CartIcon from '../../General/Icons/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../../store/cartSlice';
import { RootState } from '../../../store/store';
import {
  CartButton,
  CartCounter,
  LeftSide,
  LogoutButton,
  NavbarWrapper,
} from './NavbarStyles';
import { logout } from '../../../store/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const openCartHandler = () => {
    dispatch(toggleCart());
  };
  const { totalQuantity } = useSelector(
    (state: RootState) => state.reducer.cart
  );
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <NavbarWrapper>
      <h2>Store App</h2>
      <LeftSide>
        <CartButton onClick={openCartHandler}>
          <CartIcon />
          {totalQuantity > 0 && <CartCounter>{totalQuantity}</CartCounter>}
        </CartButton>
        <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
      </LeftSide>
    </NavbarWrapper>
  );
};

export default Navbar;
