import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const { user } = useSelector((state: RootState) => state.reducer.auth);

  return { user };
};

export default useAuth;
