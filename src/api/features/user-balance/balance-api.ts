import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";

export const getUserBalance = async () => {
  const { data } = await apiClient.get(endpoints.userEndpoints.balance);
  return data;
};
