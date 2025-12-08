import type { ModifyActiveTrade } from "../../../types";
import apiClient from "../../api-client";

export const modifyActiveTrade = async (newTradeData: ModifyActiveTrade) => {
  await apiClient.patch(
    `modify-trade-endpoint/${newTradeData.id}`,
    newTradeData
  );
};

export const closeActiveTrade = async (tradeId: string) => {
  await apiClient.post(`close-trade-endpoint/${tradeId}`, true);
};

export const fetchActiveTrades = async () => {
  const { data } = await apiClient.get("active-trades-api");
  return data;
};