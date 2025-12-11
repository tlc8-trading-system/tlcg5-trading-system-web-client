import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../query-keys";
import { getUserBalance } from "./balance-api";
import type { ServerResponse } from "../../../types/server";

interface balanceReponse {
  balance: number
}

export const useUserBalance = () => {
  return useQuery<ServerResponse<balanceReponse>>({
    queryKey: queryKeys.balance,
    queryFn: getUserBalance,
  });
};