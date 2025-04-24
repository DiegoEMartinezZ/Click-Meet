import api from "./api";

const authService = {
  // Register a new client
  registerClient: async (userData) => {
    try {
      const res = await api.post("/auth/register", userData);
      return res.data;
    } catch (error) {
      throw error.res?.data || error.message;
    }
  },
  // Login a client
  login: async (credentials) => {
    try {
      const res = await api.post("/auth/login", credentials);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      return res.data;
    } catch (error) {
      throw error.res?.data || error.message;
    }
  },
  // logout a client
  logout: () => {
    localStorage.removeItem("token");
  },
};

export default authService;
