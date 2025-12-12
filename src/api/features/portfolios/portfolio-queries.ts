import { useQuery} from "@tanstack/react-query";
import { queryKeys } from "../../query-keys"; 
import { fetchPortfolios} from "./portfolio-apis"; 
import type { OutdatedPortfolio } from "../../../types";


export const usePortfoliosQuery = () => {
    return useQuery<OutdatedPortfolio[]>({
        queryKey: queryKeys.portfolios,
        queryFn: fetchPortfolios,
        staleTime: 1000 * 60 * 5, 
    });
};



