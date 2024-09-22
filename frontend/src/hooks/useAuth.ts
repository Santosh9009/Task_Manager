import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { loginUser, logoutUser, signupUser } from '@/redux/slices/authSlice';
import { useState } from 'react';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // For capturing errors

  const login = async (credentials: { email: string; password: string }) => {
    setLoading(true);
    setError(null); 
    try {
      const resultAction = await dispatch(loginUser(credentials));

      if (loginUser.rejected.match(resultAction)) {
        setError(resultAction.error.message || 'Login failed');
        throw new Error(resultAction.error.message || 'Login failed');
      }
    } catch (error) {
      console.error(error); 
      setError(`Unable to login: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userDetails: { email: string; password: string; username: string }) => {
    setLoading(true);
    setError(null); 
    try {
      const resultAction = await dispatch(signupUser(userDetails));

      if (signupUser.rejected.match(resultAction)) {
        setError(resultAction.error.message || 'Signup failed');
        throw new Error(resultAction.error.message || 'Signup failed');
      }
    } catch (error) {
      console.error(error);
      setError(`Unable to signup: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    dispatch(logoutUser());
    setError(null); 
  };

  return { ...authState, login, signup, logout, loading, error }; // Return error state
};
