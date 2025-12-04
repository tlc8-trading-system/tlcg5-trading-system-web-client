import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import PendingOrderTile from "./PendingOrderTile";
import { mockPendingOrders } from "../../data/mock-orders";

const PendingOrders = () => {
  return (
    <Card className="shadow-sm text-left">
      <CardHeader>
        <CardTitle>Pending Orders (2)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockPendingOrders.map((order) => (
            <PendingOrderTile order={order} handleCancelOrder={() => {}} />
          ))}
        </div>

        {mockPendingOrders.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No pending orders
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PendingOrders;
