import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store';
import { loginUser, logoutUser, signupUser, fetchCurrentUser } from '../lib/slices/authSlice';
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);
  const { user, status, error } = authState;
  const [loading, setLoading] = useState(false);

  const login = async (credentials: { email: string; password: string }) => {
    setLoading(true);
    try {
      const result = await dispatch(loginUser(credentials)).unwrap();
      return { success: true, user: result }; // Return success and user data
    } catch (err) {
      console.error("Login error:", err);
      return { success: false, error: err }; // Return failure and error
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userDetails: { email: string; password: string; username: string }) => {
    setLoading(true);
    try {
      const result = await dispatch(signupUser(userDetails)).unwrap();
      return { success: true, user: result }; // Return success and user data
    } catch (err) {
      console.error("Signup error:", err);
      return { success: false, error: err }; // Return failure and error
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await dispatch(logoutUser()).unwrap();
      return { success: true }; // Return success
    } catch (err) {
      console.error("Logout error:", err);
      return { success: false, error: err }; // Return failure and error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await dispatch(fetchCurrentUser()).unwrap();
      } catch (err) {
        console.error("Fetch user error:", err);
      }
    };

    fetchUser();
  }, [dispatch]);

  return { user, login, signup, logout, status, error, loading };
};
