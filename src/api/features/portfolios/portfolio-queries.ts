import { useMutation, useQuery} from "@tanstack/react-query";
import { queryKeys } from "../../query-keys"; 
import { createPortfolio, fetchPortfolioDetails, fetchPortfolios} from "./portfolio-apis"; 
import type { Portfolio,PortfolioDetails } from "../../../types";
import type { ServerResponse } from "../../../types/server";
import { toast } from "sonner";


export const usePortfoliosQuery = () => {
    return useQuery<ServerResponse<Portfolio[]>>({
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

export const usePortfolioDetailsQuery = (id?:string) => {
    return useQuery<ServerResponse< PortfolioDetails|undefined>>({
        queryKey: queryKeys.portfolioDetails,
        queryFn: () => fetchPortfolioDetails(id),
        staleTime: 1000 * 60 * 5, 
    });
};



