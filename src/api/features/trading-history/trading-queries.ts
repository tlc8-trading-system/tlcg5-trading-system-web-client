import { useQuery } from "@tanstack/react-query";
import type { ServerActiveTrade, ServerResponse } from "../../../types/server";
import { fetchTradingHistory } from "./trading-history-api";
import { queryKeys } from "../../query-keys";

export const useFetchTradingHistory = () => {
  return useQuery<ServerResponse<ServerActiveTrade>>({
    queryKey: queryKeys.activeTrades,
    queryFn: fetchTradingHistory,
  });
};