import { useQuery} from "@tanstack/react-query";
import { queryKeys } from "../../query-keys"; 
import { fetchPortfolios} from "./portfolio-apis"; 
import type { Portfolio } from "../../../types";


export const usePortfoliosQuery = () => {
    return useQuery<Portfolio[]>({
        queryKey: queryKeys.portfolios,
        queryFn: fetchPortfolios,
        staleTime: 1000 * 60 * 5, 
    });
};



