import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";

export const fetchClients = async () => {
  const { data } = await apiClient.get(endpoints.adminEndpoints.clients);
  return data;
};

export const fetchaClient = async (clientId?: string) => {
  const { data } = await apiClient.get(
    endpoints.adminEndpoints.client + "/" + clientId
  );
  return data;
};
