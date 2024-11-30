import axios from "axios";

const Api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true, // Include cookies in cross-origin requests
});

// Add a request interceptor to attach Authorization header
Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage (or any other storage)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default Api;
