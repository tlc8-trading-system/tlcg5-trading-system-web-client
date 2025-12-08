import { mockActivePositions } from "../../data/mock-orders";
import type { ActiveTrade } from "../../types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ActivePositionTile from "./ActivePositionTile";

interface ActivePositionsProps {
  handleModifyPosition: (trade: ActiveTrade) => void;
  handleClosePosition: (tradeId: string, symbol: string) => void;
}

const ActivePositions: React.FC<ActivePositionsProps> = ({
  handleModifyPosition,
  handleClosePosition,
}) => {
  return (
    <Card className="shadow-sm text-left">
      <CardHeader>
        <CardTitle>Active Positions (3)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2">Symbol</th>
                <th className="text-left py-3 px-2">Type</th>
                <th className="text-right py-3 px-2">Qty</th>
                <th className="text-right py-3 px-2">Entry</th>
                <th className="text-right py-3 px-2">Current</th>
                <th className="text-right py-3 px-2">P/L</th>
                <th className="text-right py-3 px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockActivePositions.map((trade) => (
                <ActivePositionTile
                  trade={trade}
                  handleModifyPosition={handleModifyPosition}
                  handleClosePosition={handleClosePosition}
                />
              ))}
            </tbody>
          </table>
        </div>

        {mockActivePositions.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No active positions
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ActivePositions;
