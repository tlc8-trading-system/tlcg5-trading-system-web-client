import type { ModifyActiveTrade } from "../../../types";
import type { PlaceOrderRequest } from "../../../types/server";
import apiClient from "../../api-client";

export const placeOrder = async (orderDetails: PlaceOrderRequest) => {
  await apiClient.post("place-order-endpoint", orderDetails);
};

export const cancelOrder = async (orderId: string) => {
  await apiClient.delete(`cancel-order-endpoint/${orderId}`);
};

export const modifyActiveTrade = async (newTradeData: ModifyActiveTrade) => {
  await apiClient.patch(
    `modify-trade-endpoint/${newTradeData.id}`,
    newTradeData
  );
};

export const fetchPendingOrders = async () => {
  const { data } = await apiClient.get("pending-orders-api");
  return data;
};

export const fetchActiveTrades = async () => {
  const { data } = await apiClient.get("active-trades-api");
  return data;
};
