import React from "react";
import type { Asset } from "../../types";
import { useEffect, useRef } from "react";

interface AssetListProps {
  filteredAssets: Asset[];
  handleStockSelect: (asset: Asset) => void;
  showAssetList: (state: boolean) => void;
}

const AssetList: React.FC<AssetListProps> = ({
  filteredAssets,
  handleStockSelect,
  showAssetList,
}) => {
  const assetDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        assetDropdownRef.current &&
        !assetDropdownRef.current.contains(event.target as Node)
      ) {
        showAssetList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showAssetList]);

  return (
    <div
      className="absolute z-20 w-full mt-1 bg-card border border-border rounded-md shadow-lg max-h-64 overflow-y-auto"
      ref={assetDropdownRef}
    >
      {filteredAssets.length > 0 ? (
        filteredAssets.map((s) => (
          <button
            key={s.symbol}
            type="button"
            onClick={() => handleStockSelect(s)}
            className="w-full px-4 py-3 text-left hover:bg-muted transition-colors border-b border-border last:border-0"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span>{s.symbol}</span>
                  <span className="text-xs text-muted-foreground">
                    {s.exchange}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">{s.name}</div>
              </div>
              <div className="text-sm">${s.price.toFixed(2)}</div>
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

export default AssetList;
