import { useMutation, useQuery} from "@tanstack/react-query";
import { queryKeys } from "../../query-keys"; 
import { createPortfolio, fetchPortfolioDetails, fetchPortfolios} from "./portfolio-apis"; 
import type { ApiResponse, Portfolio,PortfolioDetails } from "../../../types";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";


export const usePortfoliosQuery = () => {
    return useQuery<ApiResponse<Portfolio[]>>({
        queryKey: queryKeys.portfolios,
        queryFn: fetchPortfolios,
        staleTime: 1000 * 60 * 5, 
    });
};


export const CreatePortfolio =  () => {
    const onSuccess = () =>{
        toast("Porfolio created successfully");
    };

    return useMutation({
        mutationFn: createPortfolio,
        onSuccess,
        onError: () => toast("Failed to create portfolio")
    })
}

export const usePortfolioDetailsQuery = () => {
    return useQuery<ApiResponse< PortfolioDetails[]>>({
        queryKey: queryKeys.portfolioDetails,
        queryFn: fetchPortfolioDetails,
        staleTime: 1000 * 60 * 5, 
    });
};



