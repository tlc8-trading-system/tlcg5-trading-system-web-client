import { useMutation } from "@tanstack/react-query";
import { placeOrder } from "./order-api";
import { toast } from "sonner";
import type { NavigateFunction } from "react-router-dom";

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
