import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../query-keys";
import { getAllUsers, getUserById } from "./user-apis";

export const useUsers = <T> () => {
  return useQuery<T>({
    queryKey: queryKeys.users,
    queryFn: getAllUsers,
  });
};

export const useUser = <T> (id: string) => {
  return useQuery<T>({
    queryKey: queryKeys.users,
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};
