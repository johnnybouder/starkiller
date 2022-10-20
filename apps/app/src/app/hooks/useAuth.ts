import { user1 } from '../types/__test_data__/user.fixture';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../store/auth-slice';
import { setCurrentUser } from '../store/user-slice';

const useAuth = () => {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(setIsLoggedIn(true));
    dispatch(setCurrentUser(user1));
  };

  const logout = () => {
    dispatch(setIsLoggedIn(false));
    dispatch(setCurrentUser(null));
  };

  return { login, logout };
};

export default useAuth;
