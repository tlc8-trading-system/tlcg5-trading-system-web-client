import { useMutation, useQuery } from "@tanstack/react-query";
import type { ServerResponse } from "../../../types/server";
import type { Exchange } from "../../../types";
import { queryKeys } from "../../query-keys";
import { fetchExchanges, updateExchange } from "./exchanges-api";
import { toast } from "sonner";
import queryClient from "../../query-client";



export const useFetchExchanges = () => {
  return useQuery<ServerResponse<Exchange []>>({
    queryKey:queryKeys.exchanges,
    queryFn : fetchExchanges,
    staleTime : 1000 * 60 * 24 * 30, // 30 days

  })
};



  export const ToggleExchangeStatus = () => {

  return useMutation<ServerResponse<Exchange>, Error, Exchange>({
    mutationFn: updateExchange,
    onSuccess: () => {
      toast.success('Exchange updated successfully');
      queryClient.invalidateQueries({ queryKey: queryKeys.exchanges });
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    }
  });
};