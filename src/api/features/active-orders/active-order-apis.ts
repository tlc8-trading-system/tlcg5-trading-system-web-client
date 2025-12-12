import type { ModifyActiveTrade } from "../../../types";
import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";

export const modifyActiveTrade = async (newTradeData: ModifyActiveTrade) => {
  await apiClient.put(
    endpoints.orderEndpoints.allPendingOrders + newTradeData.id,
    newTradeData
  );
};

export const closeActiveTrade = async (tradeId: string) => {
  await apiClient.post(`close-trade-endpoint/${tradeId}`, true);
};

export const fetchActiveTrades = async () => {
  const { data } = await apiClient.get(endpoints.tradeEndpoints.allTrades);
  return data;
};
