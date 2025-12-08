import { Badge } from "../ui/badge";
import { Edit2, TrendingDown, TrendingUp, X } from "lucide-react";
import { Button } from "../ui/button";
import type { ActiveTrade } from "../../types";
import { useState } from "react";
import ModifyPosition from "../modals/ModifyPosition";
import { ModifyActiveTrade } from "../../api/features/orders/order-queries";

interface ActiveTradeTileProps {
  trade: ActiveTrade;
}

const ActiveTradeTile: React.FC<ActiveTradeTileProps> = ({ trade }) => {
  const [modifyTrade, setModifyTrade] = useState(false);
  const [modifyTradeData, setModifyTradeData] = useState({
    id: trade.id,
    symbol: trade.symbol,
    stopLoss: trade.entryPrice.toString(),
    takeProfit: trade.entryPrice.toString(),
  });
  const modifyActiveTrade = ModifyActiveTrade();

  const saveTradeModification = () => {
    modifyActiveTrade.mutate(modifyTradeData);
  };

  return (
    <>
      <tr
        key={trade.id}
        className="w-full flex items-center justify-between border-b border-border hover:bg-muted/30 transition-colors text-left"
      >
        <td className="py-4 px-2">{trade.symbol}</td>
        <td className="py-4 px-2">
          <Badge variant={trade.type === "Long" ? "default" : "secondary"}>
            {trade.type}
          </Badge>
        </td>
        <td className="text-right py-4 px-2">{trade.quantity}</td>
        <td className="text-right py-4 px-2">${trade.entryPrice.toFixed(2)}</td>
        <td className="text-right py-4 px-2">
          ${trade.currentPrice.toFixed(2)}
        </td>
        <td className="text-right py-4 px-2">
          <div className="flex items-center justify-end gap-1">
            {trade.profitLoss >= 0 ? (
              <TrendingUp className="size-3 text-green-500" />
            ) : (
              <TrendingDown className="size-3 text-red-500" />
            )}
            <span
              className={
                trade.profitLoss >= 0
                  ? "text-green-600 dark:text-green-500"
                  : "text-red-600 dark:text-red-500"
              }
            >
              ${Math.abs(trade.profitLoss).toFixed(2)}
            </span>
            <span className="text-xs text-muted-foreground ml-1">
              ({trade.profitLossPercent >= 0 ? "+" : ""}
              {trade.profitLossPercent}%)
            </span>
          </div>
        </td>
        <td className="py-4 px-2">
          <div className="flex items-center justify-end gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setModifyTrade(true);
              }}
            >
              <Edit2 className="size-3 mr-1" />
              Modify
            </Button>
            <Button size="sm" variant="outline" onClick={() => {}}>
              <X className="size-3 mr-1" />
              Close
            </Button>
          </div>
        </td>
      </tr>
      <ModifyPosition
        handleSaveModify={saveTradeModification}
        modifyData={modifyTradeData}
        setModifyData={setModifyTradeData}
        setShowModifyDialog={setModifyTrade}
        showModifyDialog={modifyTrade}
      />
    </>
  );
};

export default ActiveTradeTile;
