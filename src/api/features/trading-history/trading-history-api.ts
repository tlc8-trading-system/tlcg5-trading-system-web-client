import apiClient from "../../api-client"
import { endpoints } from "../../api-endpoints";

export const fetchTradingHistory = async() => {
  const response =  await apiClient.get(endpoints.tradeEndpoints.tradeHistory);
  return response.data
}