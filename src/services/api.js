import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";
// Axios instance
const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Iterceptor to add tokens to headers

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
