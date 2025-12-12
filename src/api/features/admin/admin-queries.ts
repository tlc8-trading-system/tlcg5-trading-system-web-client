import { queryKeys } from "../../query-keys";
import type { ServerResponse } from "../../../types/server";
import { useQuery } from "@tanstack/react-query";
import type { Client } from "../../../types";
import { fetchaClient, fetchClients } from "./admin-api";

export const useAllClients = () => {
  return useQuery<ServerResponse<Client[]>>({
    queryKey: queryKeys.clients,
    queryFn: fetchClients
  });
};

export const useClient = (clientId?: string) => {
  return useQuery<ServerResponse<Client>>({
    queryKey: queryKeys.client,
    queryFn: () => fetchaClient(clientId)
  });
};