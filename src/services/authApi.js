import axiosInstance from "./axiosClient";

export const getAllProviders = async (page, specialization) => {
  const response = await axiosInstance.get("/auth/provider", {
    params: {
      page,
      ...(specialization ? { specialization } : {}),
    },
  });
  return response.data;
};
export const getProvider = async (id) => {
  const response = await axiosInstance.get(`/auth/provider/${id}`);
  return response.data;
};

export const getMe = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data.data.user;
};
export const updateMe = async (userData) => {
  const response = await axiosInstance.patch("/auth/me", userData);
  return response.data.data.user;
};

export const login = async (userData) => {
  const response = await axiosInstance.post("/auth/login", userData);
  return response.data;
};

export const register = async (userData) => {
  const response = await axiosInstance.post("/auth/register", userData);
  return response.data;
};

export const beProvider = async (userData) => {
  const response = await axiosInstance.patch("/auth/provider", userData);
  return response.data;
};
