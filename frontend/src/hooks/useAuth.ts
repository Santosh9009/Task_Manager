import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { loginUser, logoutUser, signupUser } from '@/redux/slices/authSlice';
import { useState } from 'react';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(false);

  const login = async (credentials: { email: string; password: string }) => {
    setLoading(true);
    try {
      // Dispatch loginUser and wait for the result
      const resultAction = await dispatch(loginUser(credentials));

      if (loginUser.rejected.match(resultAction)) {
        throw new Error(resultAction.error.message || 'Login failed');
      }
    } catch (error) {
      throw new Error(`Unable to login: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userDetails: { email: string; password: string; username: string }) => {
    setLoading(true);
    try {
      const resultAction = await dispatch(signupUser(userDetails));
      if (signupUser.rejected.match(resultAction)) {
        throw new Error(resultAction.error.message || 'Signup failed');
      }
    } catch (error) {
      throw new Error(`Unable to signup: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => dispatch(logoutUser());

  return { ...authState, login, signup, logout, loading };
};
