import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getMyBookings,
  getTimeSlots,
  addBooking,
  getAllBookings,
  changeStatus,
} from "../services/bookingApi";

export const useMyBookings = (status, page = 2, limit = 10) => {
  return useQuery({
    queryKey: ["booking", status, page],
    queryFn: () => getMyBookings(status, page, limit),
  });
};

export const useAllBookings = (filter = {}) => {
  return useQuery({
    queryKey: ["booking", filter],
    queryFn: () => getAllBookings(filter),
  });
};

export const useAvailable = (providerId, date) => {
  return useQuery({
    queryKey: ["time", providerId, date],
    queryFn: () => getTimeSlots(providerId, date ),
    enabled: !!providerId && !!date,
  });
};

export const useAddBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["booking"] });
      queryClient.invalidateQueries({ queryKey: ["time"] });
    },
  });
};
export const useChangeStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changeStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["booking"] });
    },
  });
};
