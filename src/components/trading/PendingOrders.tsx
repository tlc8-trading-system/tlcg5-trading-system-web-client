import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import PendingOrderTile from "./PendingOrderTile";
import { usePendingOrders } from "../../api/features/pending-orders/pending-order-queries";
import type { ServerActiveTrade as PendingOrder } from "../../types/server";
import { Spinner } from "../ui/spinner";

const PendingOrders = () => {
  const { data, isLoading, error } = usePendingOrders();

  let pendingOrders: PendingOrder[] = [];
  if (data?.data) pendingOrders = data.data;
  if (error) pendingOrders = [];

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

        {isLoading ? (
          <div className="w-full flex items-center justify-center pt-12">
            <Spinner />
          </div>
        ) : (
          <div className="space-y-3">
            {pendingOrders.map((order) => (
              <PendingOrderTile order={order} />
            ))}
            {pendingOrders.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No pending orders
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PendingOrders;
