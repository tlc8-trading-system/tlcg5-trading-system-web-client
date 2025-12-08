import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import PendingOrderTile from "./PendingOrderTile";
import { usePendingOrders } from "../../api/features/pending-orders/pending-order-queries";
import type { PendingOrder } from "../../types";
import { mockPendingOrders } from "../../data/mock-orders";

const PendingOrders = () => {
  const { data, isLoading, error } = usePendingOrders();

  let pendingOrders: PendingOrder[] = [];
  if (data?.data) pendingOrders = data.data;
  if (error) pendingOrders = mockPendingOrders;

  return (
    <Card className="shadow-sm text-left">
      <CardHeader>
        <CardTitle>
          Pending Orders ({isLoading ? "..." : pendingOrders.length})
        </CardTitle>
      </CardHeader>

      <CardContent>
        {error && (
          <p className="text-destructive">An error occured, please try again</p>
        )}
        <div className="space-y-3">
          {pendingOrders.map((order) => (
            <PendingOrderTile order={order} />
          ))}
        </div>

        {pendingOrders.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No pending orders
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PendingOrders;
