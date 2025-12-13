import type { Exchange } from "../../../types";
import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";

export const fetchExchanges  = async () => {
  const {data} = await  apiClient.get(endpoints.exchanges.getExchanges);
  return data;
}


export const updateExchange = async (exchangeData: Exchange) => {
  const { data } = await apiClient.put(endpoints.exchanges.toggleExchange + exchangeData.id, exchangeData);
  return data;
}