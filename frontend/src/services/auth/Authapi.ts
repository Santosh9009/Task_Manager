import axios from "axios";

// Backend URL
const AUTH_URL = "http://localhost:8000/api/auth";

// Login API
export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${AUTH_URL}/login`, credentials, {
    withCredentials: true,
  });

  console.log(response.data);

  return response.data;
};

// Signup API
export const signup = async (userData: {
  email: string;
  password: string;
  username: string;
}) => {
  const response = await axios.post(`${AUTH_URL}/signup`, userData, {
    withCredentials: true,
  });

  return response.data;
};

// Fetch the current user
export const fetchUser = async () => {
  const response = await axios.get(`${AUTH_URL}/me`, {
    withCredentials: true,
  });

  return response.data;
};
