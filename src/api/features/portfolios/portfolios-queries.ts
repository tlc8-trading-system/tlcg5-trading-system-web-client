import { useQuery } from "@tanstack/react-query";
import type { ServerResponse } from "../../../types/server";
import { queryKeys } from "../../query-keys";
import { getMyPortfolios } from "./portfolios-api";
import type { Portfolio } from "../../../types";

export const useMyPortfolios = () => {
  return useQuery<ServerResponse<Portfolio[]>>({
    queryKey: queryKeys.portfolios,
    queryFn: getMyPortfolios,
  });
};
