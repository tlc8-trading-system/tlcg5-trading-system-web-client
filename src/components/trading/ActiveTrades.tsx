import { mockActiveTrades } from "../../data/mock-orders";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ActiveTradeTile from "./ActiveTradeTile";
import { Spinner } from "../ui/spinner";
import { useActiveTrades } from "../../api/features/active-orders/active-order-queries";
import type { ServerActiveTrade } from "../../types/server";

interface ActiveTradeProps {
  clientId?: string
}

const ActiveTrades:React.FC<ActiveTradeProps> = ({clientId}) => {  
  const { data, isLoading, error } = useActiveTrades(clientId);

  let activeTrades: ServerActiveTrade[] = [];
  if (data?.data)
    activeTrades = data.data.filter((order) => order.status === "FILLED");
  if (error) activeTrades = [];

  return (
    <Card className="shadow-sm text-left">
      <CardHeader>
        <CardTitle>
          Active Positions ({isLoading ? "..." : activeTrades.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          {error && (
            <p className="text-destructive">
              Failed to fetch active trades, showing mock trades instead
            </p>
          )}
          <table className="w-full">
            <thead className="w-full">
              <tr className="border-b border-border ">
                <th className="text-left py-3 px-2">Symbol</th>
                <th className="text-left py-3 px-2">Side</th>
                <th className="text-left py-3 px-2">Position</th>
                <th className="text-right py-3 px-2">Qty</th>
                <th className="text-right py-3 px-2">Entry</th>
                <th className="text-right py-3 px-2">Current</th>
                <th className="text-right py-3 px-2">P/L</th>
                <th className="text-right py-3 px-2">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {isLoading && (
                <div className="w-full flex items-center justify-center pt-12">
                  <Spinner />
                </div>
              )}
              {activeTrades.map((trade) => (
                <ActiveTradeTile trade={trade} key={trade.id} />
              ))}
            </tbody>
          </table>
        </div>

        {!isLoading &&
          (error ? mockActiveTrades : activeTrades).length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No active trades
            </div>
          )}
      </CardContent>
    </Card>
  );
};

export default ActiveTrades;
