import { queryKeys } from "../../query-keys";
import type { ServerResponse } from "../../../types/server";
import type { ServerActiveTrade as Order } from "../../../types/server";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "./orders-api";

export const useAllOrders = () => {
  return useQuery<ServerResponse<Order[]>>({
    queryKey: queryKeys.pendingOrders,
    queryFn: fetchOrders,
    refetchInterval: 1000,
  });
};