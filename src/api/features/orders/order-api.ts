import type { PlaceOrderRequest } from "../../../types/server";
import apiClient from "../../api-client";

export const placeOrder = async (orderDetails: PlaceOrderRequest) => {
  await apiClient.post("place-order-endpoint", orderDetails);
};