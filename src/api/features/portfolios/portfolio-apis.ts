import type { CreateNewPortfolio, Portfolio } from "../../../types";
import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";



export const fetchPortfolios = async () => {
  const {data} =  await apiClient.get(endpoints.portfolioEndpoints.fetchPortfolio);
  return data;
};

export const fetchPortfolioDetails = async (id?:string) => {
  console.log(endpoints.portfolioEndpoints.fetchPortfolioDetails  + id)
  const {data} =  await apiClient.get(endpoints.portfolioEndpoints.fetchPortfolioDetails + id);
  return data;
};
export const createPortfolio = async (newPortfolio:CreateNewPortfolio ) => {
  return await apiClient.post(endpoints.portfolioEndpoints.createPortfolio, newPortfolio)
}
