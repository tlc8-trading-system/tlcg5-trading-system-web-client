import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../query-keys";
import { getUserBalance } from "./balance-api";
import type { serverResponse } from "../../../types/server";

export const useUserBalance = () => {
  return useQuery<serverResponse>({
    queryKey: queryKeys.balance,
    queryFn: getUserBalance,
  });
};