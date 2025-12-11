import { useQuery } from "@tanstack/react-query";
import type { User } from "../../../types";
import { getUser } from "./user-apis";


export const useCurrentUser = () => {
  return useQuery<User>({
    queryKey: ["me"],
    queryFn: getUser,
  });
};


