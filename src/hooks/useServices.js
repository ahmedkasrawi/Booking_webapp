import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getServices,
  getService,
  postService,
} from "../services/servicesApi";

export const useAllServices = (filter = {}) => {
  
  return useQuery({
    queryKey: ["services", filter],
    queryFn: () => getServices(filter),
  });
};

export const useService = (id) => {
  return useQuery({
    queryKey: ["services"],
    queryFn: () => getService(id)
  });

};
export const useAddService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });
};
