import axiosInstance from "./axiosClient";

// get all services
export const getServices = async (filter) => {
  const provider = filter?.provider;
  const res = await axiosInstance.get("/services", {
    params: {
      ...(provider ? { provider } : {}),
    },
  });
  return res.data;
};
// add one new service
export const postService = async (payload) => {
  const res = await axiosInstance.post("/services", payload);
  return res.data.data;
};
// get one service
export const getService = async (id) => {
  const res = await axiosInstance.get(`/services/${id}`);
  return res.data;
};
// update service
export const updateService = async (id, payload) => {
  const res = await axiosInstance.put(`/services/${id}`, payload);
  return res.data.data;
};

// stop service
/* soon */