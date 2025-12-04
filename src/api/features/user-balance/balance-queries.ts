import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../query-keys";
import { getUserBalance } from "./balance-api";
import type { ServerResponse } from "../../../types/server";

export const useUserBalance = () => {
  return useQuery<ServerResponse>({
    queryKey: queryKeys.balance,
    queryFn: getUserBalance,
  });
};