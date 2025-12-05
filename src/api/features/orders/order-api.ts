import type { PlaceOrderRequest } from "../../../types/server";
import apiClient from "../../api-client";

export const placeOrder = async (orderDetails: PlaceOrderRequest) => {
  await apiClient.post("place-order-endpoint", orderDetails);
};

export const cancelOrder = async (orderId: string) => {
  await apiClient.delete(`cancel-order-endpoint/${orderId}`);
};

export const fetchPendingOrders = async () => {
  const {data} = await apiClient.get("pending-orders-api");
  return data
};