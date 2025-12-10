import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { User } from "../../../types";
import { getUser } from "./user-apis"; 


export const useCurrentUser = (): UseQueryResult<User, Error> => {
  return useQuery<User, Error>({
    queryKey: ["me"], 
    queryFn: getUser, 
  });
};