import React from "react";
import { useEffect, useRef } from "react";
import type { ServerAsset } from "../../types/server";
import type { OrderType } from "../../types";

interface PortfolioSearchListProps {
  orderType: OrderType;
  filteredAssets: ServerAsset[];
  handleStockSelect: (asset: ServerAsset) => void;
  showPortfolioSearchList: (state: boolean) => void;
}

const PortfolioSearchList: React.FC<PortfolioSearchListProps> = ({
  orderType,
  filteredAssets,
  handleStockSelect,
  showPortfolioSearchList,
}) => {
  const assetDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        assetDropdownRef.current &&
        !assetDropdownRef.current.contains(event.target as Node)
      ) {
        showPortfolioSearchList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPortfolioSearchList]);

  return (
    <div
      className="absolute z-20 w-full mt-1 bg-card border border-border rounded-md shadow-lg max-h-64 overflow-y-auto"
      ref={assetDropdownRef}
    >
      {filteredAssets.length > 0 ? (
        filteredAssets.map((s) => (
          <button
            key={s.TICKER}
            type="button"
            onClick={() => handleStockSelect(s)}
            className="w-full px-4 py-3 text-left hover:bg-muted transition-colors border-b border-border last:border-0"
          >
            <div className="flex items-center justify-between">
              <div>
                <div>
                  <span>{s.TICKER}</span>
                </div>
              </div>
              <div className="text-sm">
                $
                {orderType === "Buy"
                  ? s.ASK_PRICE.toFixed(2)
                  : s.BID_PRICE.toFixed(2)}{" "}
              </div>{" "}
            </div>
          </button>
        ))
      ) : (
        <div className="px-4 py-3 text-sm text-muted-foreground">
          No assets found
        </div>
      )}
    </div>
  );
};

export default PortfolioSearchList;
