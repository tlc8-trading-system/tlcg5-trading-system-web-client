import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";

export const getAllAssets = async () => {
  const { data } = await apiClient.get(endpoints.assetEndpoints.allAssets);
  return data;
};
