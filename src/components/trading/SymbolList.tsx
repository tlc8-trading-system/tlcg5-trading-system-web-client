import React from "react";
import type { Stock } from "../../types";

interface SymbolListProps {
  filteredSymbols: Stock[];
  handleStockSelect: (symbol: Stock) => void;
}

const SymbolList: React.FC<SymbolListProps> = ({
  filteredSymbols,
  handleStockSelect,
}) => {
  return (
    <div className="absolute z-20 w-full mt-1 bg-card border border-border rounded-md shadow-lg max-h-64 overflow-y-auto">
      {filteredSymbols.length > 0 ? (
        filteredSymbols.map((s) => (
          <button
            key={s.ticker}
            type="button"
            onClick={() => handleStockSelect(s)}
            className="w-full px-4 py-3 text-left hover:bg-muted transition-colors border-b border-border last:border-0"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span>{s.ticker}</span>
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
          No symbols found
        </div>
      )}
    </div>
  );
};

export default SymbolList;
