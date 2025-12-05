import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchPendingOrders, placeOrder } from "./order-api";
import { toast } from "sonner";
import type { NavigateFunction } from "react-router-dom";
import { queryKeys } from "../../query-keys";
import type { ServerResponse } from "../../../types/server";
import type { Order } from "../../../types";

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

export const usePendingOrders = () => {
  return useQuery<ServerResponse<Order>>({
    queryKey: queryKeys.pendingOrders,
    queryFn: fetchPendingOrders,
  });
};