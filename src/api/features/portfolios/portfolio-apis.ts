import { mockPortfolios } from "../../../data/mock-portfolios";
import type { Portfolio } from "../../../types";
let dbPortfolios = [...mockPortfolios]; 


export const fetchPortfolios = async (): Promise<Portfolio[]> => {
  return dbPortfolios;
};

