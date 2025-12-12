import { queryKeys } from "../../query-keys";
import type { ServerResponse } from "../../../types/server";
import { useQuery } from "@tanstack/react-query";
import type { Client } from "../../../types";
import { fetchClients } from "./admin-api";

export const useAllClients = () => {
  return useQuery<ServerResponse<Client[]>>({
    queryKey: queryKeys.clients,
    queryFn: fetchClients
  });
};