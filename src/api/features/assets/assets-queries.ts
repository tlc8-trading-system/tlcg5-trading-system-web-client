import { useQuery } from "@tanstack/react-query";
import type { ServerAsset, ServerResponse } from "../../../types/server";
import { queryKeys } from "../../query-keys";
import { getAllAssets } from "./assets-api";

interface Assets {
  bestBuyAssets: ServerAsset[],
  bestSellAssets: ServerAsset[]
}

export const useAvailableAssets = () => {
  return useQuery<ServerResponse<Assets>>({
    queryKey: queryKeys.assets,
    queryFn: getAllAssets,
  });
};
