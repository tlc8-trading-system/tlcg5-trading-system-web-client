import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";

export const fetchClients = async () => {
  const { data } = await apiClient.get(endpoints.adminEndpoints.clients);
  return data;
};
