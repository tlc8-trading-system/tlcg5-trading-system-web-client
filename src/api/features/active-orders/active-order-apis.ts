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

export const fetchActiveTrades = async (clientId?: string) => {
  const { data } = await apiClient.get(
    clientId
      ? endpoints.adminEndpoints.clientTrades + clientId + "/orders"
      : endpoints.tradeEndpoints.allTrades
  );
  return data;
};
