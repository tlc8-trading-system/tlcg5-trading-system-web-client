import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../query-keys";
import { getAllUsers, getUserById } from "./user-apis";

export const useUsers = () => {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: getAllUsers,
  });
};

export const useUser = (id: string) => {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};
