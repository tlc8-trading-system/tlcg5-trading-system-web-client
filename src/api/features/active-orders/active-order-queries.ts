import { toast } from "sonner";
import queryClient from "../../query-client";
import { queryKeys } from "../../query-keys";
import { useMutation, useQuery } from "@tanstack/react-query";
import { closeActiveTrade, fetchActiveTrades, modifyActiveTrade } from "./active-order-apis";
import type { ServerActiveTrade, ServerResponse } from "../../../types/server";

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
  return useQuery<ServerResponse<ServerActiveTrade>>({
    queryKey: queryKeys.activeTrades,
    queryFn: fetchActiveTrades,
    refetchInterval: 1000
  });
};