import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  login,
  getMe,
  register,
  beProvider,
  getAllProviders,
  getProvider,
} from "../services/authApi";

export const useUser = () => {
  return useQuery({
    queryKey: ["auth me"],
    queryFn: () => getMe(),
    enabled: !!localStorage.getItem("token"),
    staleTime: Infinity,
    retry: false,
  });
};
export const useAllProviders = ( page,specialization) => {
  return useQuery({
    queryKey: ["providers", specialization, page],
    queryFn: () => getAllProviders(page, specialization),
  });
};
export const useProvider = (id) => {
  return useQuery({
    queryKey: ["provider",id],
    queryFn: () => getProvider(id),
  });
};
export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData(["auth"], { data: { user: data.data.user } });
    },
  });
};
export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData(["auth"], { data: { user: data.data.user } });
    },
  });
};
export const useBeProvider = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: beProvider,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData(["auth"], { data: { user: data.data.user } });
    },
  });
};
export const useLogout = () => {
  const queryClient = useQueryClient();
  return () => {
    localStorage.removeItem("token");
    queryClient.removeQueries(["auth"]);
    window.location.href = "/login";
  };
};

// router.patch("/provider", allowTo("user"), userToProvider);
