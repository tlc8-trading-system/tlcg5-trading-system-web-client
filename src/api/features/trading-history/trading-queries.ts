import { useQuery } from "@tanstack/react-query";
import type { ServerResponse, ServerTradeHistory } from "../../../types/server";
import { fetchTradingHistory } from "./trading-history-api";
import { queryKeys } from "../../query-keys";

export const useFetchTradingHistory = () => {
  return useQuery<ServerResponse<ServerTradeHistory []>>({
    queryKey: queryKeys.activeTrades,
    queryFn: fetchTradingHistory,
  });
};