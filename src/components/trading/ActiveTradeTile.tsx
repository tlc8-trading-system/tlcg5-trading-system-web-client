import { Badge } from "../ui/badge";
import { TrendingDown, TrendingUp, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  CloseActiveTrade,
} from "../../api/features/active-orders/active-order-queries";
import type { ServerActiveTrade } from "../../types/server";
import { profitLoss } from "../../services/order-service";

interface ActiveTradeTileProps {
  trade: ServerActiveTrade;
}

const ActiveTradeTile: React.FC<ActiveTradeTileProps> = ({ trade }) => {

  const closeActiveTrade = CloseActiveTrade();


  const closeTrade = () => {
    closeActiveTrade.mutate(trade.id);
  };

  return (
    <>
      <tr
        key={trade.id}
        className="w-full border-b border-border hover:bg-muted/30 transition-colors text-right"
      >
        <td className="py-4 px-2">{trade.product}</td>
        <td className="py-4 px-2">
          <Badge variant={trade.side === "BUY" ? "default" : "secondary"}>
            {trade.side}
          </Badge>
        </td>
        <td className="py-4 px-2">
          <Badge variant={trade.type === "MARKET" ? "default" : "secondary"}>
            {trade.type}
          </Badge>
        </td>
        <td className="text-right py-4 px-2">{trade.quantity}</td>
        <td className="text-right py-4 px-2">${trade.price.toFixed(2)}</td>
        <td className="text-right py-4 px-2">${trade.price.toFixed(2)}</td>
        <td className="text-right py-4 px-2">
          <div className="flex items-center justify-end gap-1">
            {profitLoss(trade) >= 0 ? (
              <TrendingUp className="size-3 text-green-500" />
            ) : (
              <TrendingDown className="size-3 text-red-500" />
            )}
            <span
              className={
                profitLoss(trade) >= 0
                  ? "text-green-600 dark:text-green-500"
                  : "text-red-600 dark:text-red-500"
              }
            >
              ${Math.abs(profitLoss(trade)).toFixed(2)}
            </span>
          </div>
        </td>
        <td className="py-4 px-2">
          <div className="flex items-center justify-end gap-2">
            
            <Button size="sm" variant="outline" onClick={closeTrade}>
              <X className="size-3 mr-1" />
              Close
            </Button>
          </div>
        </td>
      </tr>

    </>
  );
};

export default ActiveTradeTile;
