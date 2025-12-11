import { useQuery } from "@tanstack/react-query";
import type { ServerAsset, ServerResponse } from "../../../types/server";
import { queryKeys } from "../../query-keys";
import { getAllAssets } from "./assets-api";

export const useAvailableAssets = () => {
  return useQuery<ServerResponse<ServerAsset[]>>({
    queryKey: queryKeys.assets,
    queryFn: getAllAssets,
  });
};
