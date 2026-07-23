import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { allUsers, userStatus } from "../services/adminApi";

export const useAllUsers = (filter = {}) => {
  return useQuery({
    queryKey: ["admin", "users", filter],
    queryFn: () => allUsers(filter),
  });
};
export const useUserStatus = ({ id, payload }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userStatus,
    onSuccess: (data) => {
      queryClient.setQueryData(["admin", "users", [id]], { data: data });
    },
  });
};
