import type { PlaceOrderRequest } from "../../../types/server";
import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";

export const placeOrder = async (orderDetails: PlaceOrderRequest) => {  
  await apiClient.post(endpoints.orderEndpoints.placeOrder, orderDetails);
};

export const cancelOrder = async (orderId: string) => {
  await apiClient.delete(endpoints.orderEndpoints.allPendingOrders + "/" + orderId);
};

export const fetchPendingOrders = async () => {
  const { data } = await apiClient.get(endpoints.orderEndpoints.allPendingOrders);
  return data;
};
