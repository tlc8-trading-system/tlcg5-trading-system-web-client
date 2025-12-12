import { useMutation, useQuery} from "@tanstack/react-query";
import { queryKeys } from "../../query-keys"; 
import { createPortfolio, fetchPortfolios} from "./portfolio-apis"; 
import type {Portfolio } from "../../../types";
import { toast } from "sonner";


export const usePortfoliosQuery = () => {
    return useQuery<Portfolio[]>({
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



