import { toast } from "sonner";
import queryClient from "../../query-client";
import { queryKeys } from "../../query-keys";
import { useMutation, useQuery } from "@tanstack/react-query";
import { closeActiveTrade, modifyActiveTrade } from "./active-order-apis";
import type { ServerResponse } from "../../../types/server";
import type { ActiveTrade } from "../../../types";
import { fetchPendingOrders } from "../pending-orders/pending-order-api";

export const ModifyActiveTrade = () => {
  const onSuccess = () => {
    toast("Trade modified successfully");
    queryClient.invalidateQueries({ queryKey: queryKeys.activeTrades });
  };

  return useMutation({
    mutationFn: modifyActiveTrade,
    onSuccess,
    onError: () => toast("Failed to modify your trade"),
  });
};

export const CloseActiveTrade = () => {
  const onSuccess = () => {
    toast("Trade closed successfully");
    queryClient.invalidateQueries({ queryKey: queryKeys.activeTrades });
  };

  return useMutation({
    mutationFn: closeActiveTrade,
    onSuccess,
    onError: () => toast("Failed to close your trade"),
  });
};

export const useActiveTrades = () => {
  return useQuery<ServerResponse<ActiveTrade>>({
    queryKey: queryKeys.activeTrades,
    queryFn: fetchPendingOrders,
  });
};