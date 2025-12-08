import { useMutation, useQuery } from "@tanstack/react-query";
import { cancelOrder, fetchPendingOrders, modifyActiveTrade, placeOrder } from "./order-api";
import { toast } from "sonner";
import type { NavigateFunction } from "react-router-dom";
import { queryKeys } from "../../query-keys";
import type { ServerResponse } from "../../../types/server";
import type { ActiveTrade, PendingOrder } from "../../../types";
import queryClient from "../../query-client";

export const PlaceOrder = (
  orderDescription: string,
  navigate: NavigateFunction
) => {
  const onSuccess = () => {
    toast(orderDescription);
    setTimeout(() => {
      navigate("/trading/orders");
    }, 1000);
  };

  return useMutation({
    mutationFn: placeOrder,
    onSuccess,
    onError: () => toast("Unable to place order, please try again later"),
  });
};

export const CancelOrder = () => {
  const onSuccess = () => {
    toast("Order cancelled successfully");
    queryClient.invalidateQueries({ queryKey: queryKeys.pendingOrders });
  };

  return useMutation({
    mutationFn: cancelOrder,
    onSuccess,
    onError: () => toast("Failed to cancel order"),
  });
};

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

export const usePendingOrders = () => {
  return useQuery<ServerResponse<PendingOrder>>({
    queryKey: queryKeys.pendingOrders,
    queryFn: fetchPendingOrders,
  });
};

export const useActiveTrades = () => {
  return useQuery<ServerResponse<ActiveTrade>>({
    queryKey: queryKeys.activeTrades,
    queryFn: fetchPendingOrders,
  });
};
