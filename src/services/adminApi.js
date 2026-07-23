import axiosInstance from "./axiosClient";

export const allUsers = async () => {
  const response = await axiosInstance.get("/admin/users");
  return response.data;
};
export const userStatus = async ({id, payload}) => {
  const response = await axiosInstance.patch(`/admin/users/${id}`, payload );
  return response.data;
};
