import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";

export const fetchOrders = async () => {
  const { data } = await apiClient.get(endpoints.orderEndpoints.allOrders);
  return data;
};
