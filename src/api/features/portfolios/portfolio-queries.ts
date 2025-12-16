import { useMutation, useQuery} from "@tanstack/react-query";
import { queryKeys } from "../../query-keys"; 
import { createPortfolio, fetchPortfolioDetails, fetchPortfolios} from "./portfolio-apis"; 
import type { Portfolio,PortfolioDetails } from "../../../types";
import type { ServerResponse } from "../../../types/server";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


export const usePortfoliosQuery = () => {
    return useQuery<ServerResponse<Portfolio[]>>({
        queryKey: queryKeys.portfolios,
        queryFn: fetchPortfolios,
        refetchOnMount:'always'
    });
};


export const CreatePortfolio =  () => {
    const navigate = useNavigate();
    const onSuccess = () =>{
        toast("Porfolio created successfully");
        navigate("/portfolios")
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



