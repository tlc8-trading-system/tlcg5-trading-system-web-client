import { mockPortfolios } from "../../../data/mock-portfolios";
import type { CreateNewPortfolio, Portfolio } from "../../../types";
import apiClient from "../../api-client";
import { endpoints } from "../../api-endpoints";
const dbPortfolios = [...mockPortfolios]; 


export const fetchPortfolios = async (): Promise<Portfolio[]> => {
  return dbPortfolios;
};

export const createPortfolio = async (newPortfolio:CreateNewPortfolio ) => {
  apiClient.post(endpoints.portfolioEndpoints.createPortfolio, newPortfolio)
}
