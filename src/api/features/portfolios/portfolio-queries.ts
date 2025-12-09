import { useQuery} from "@tanstack/react-query";
import { portfolioKeys } from "../../query-keys"; 
import { fetchPortfolios} from "./portfolio-apis"; 
import type { Portfolio } from "../../../types";


export const usePortfoliosQuery = () => {
    return useQuery<Portfolio[]>({
        queryKey: portfolioKeys.all,
        queryFn: fetchPortfolios,
        staleTime: 1000 * 60 * 5, 
    });
};



