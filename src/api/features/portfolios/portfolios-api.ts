import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";

export const getMyPortfolios = async () => {
  const { data } = await apiClient.get(endpoints.portfolioEndpoints.myPortfolios);
  return data;
};
