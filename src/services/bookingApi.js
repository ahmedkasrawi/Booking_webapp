import axiosInstance from "./axiosClient";

// get user bookings
export const getMyBookings = async ({ page, status, limit }) => {
  const res = await axiosInstance.get(`/bookings/my`, {
    params: {
      page,
      limit,
      ...(status ? { status } : {}),
    },
  });
  return res.data;
};
// get all bookings
export const getAllBookings = async () => {
  const res = await axiosInstance.get("/bookings");
  return res.data;
};
// get time slots by provider, date
export const getTimeSlots = async (providerId, date) => {
  const res = await axiosInstance.get(`/bookings/available-slots`, {
    params: {
      ...(providerId ? { providerId } : {}),
      ...(date ? { date } : {}),
    },
  });
  return res.data;
};
// add new booking
export const addBooking = async (payload) => {
  const res = await axiosInstance.post(`/bookings/`, payload);
  return res.data;
};
// change status of booking
export const changeStatus = async (payload) => {
  const res = await axiosInstance.patch(
    `/bookings/${payload?.id}`,
    payload?.obg,
  );
  return res.data;
};
