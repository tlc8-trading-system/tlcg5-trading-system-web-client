import type { CreateNewPortfolio, Portfolio } from "../../../types";
import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";



export const fetchPortfolioDetails = async () => {
  const {data} =  await apiClient.get(endpoints.portfolioEndpoints.fetchPortfolioDetails);
  return data;
};
export const createPortfolio = async (newPortfolio:CreateNewPortfolio ) => {
  apiClient.post(endpoints.portfolioEndpoints.createPortfolio, newPortfolio)
}
