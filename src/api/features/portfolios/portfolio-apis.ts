import { mockOutdatedPortfolios } from "../../../data/mock-portfolios";
import type { OutdatedPortfolio } from "../../../types";
const dbPortfolios = [...mockOutdatedPortfolios]; 


export const fetchPortfolios = async (): Promise<OutdatedPortfolio[]> => {
  return dbPortfolios;
};

