import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://booking-system-production-a809.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default axiosInstance;

// "http://localhost:3001/api"