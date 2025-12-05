import { CancelOrder } from "../../api/features/orders/order-queries";
import { formatDate } from "../../lib/utils";
import type { Order } from "../../types";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface PendingOrderTileProps {
  order: Order;
}

const PendingOrderTile: React.FC<PendingOrderTileProps> = ({ order }) => {
  const cancelOrder = CancelOrder();

  return (
    <div
      key={order.id}
      className="flex items-center justify-between p-4 rounded-lg border border-border"
    >
      <div className="flex-1 space-y-2 text-left">
        <div className="flex items-center gap-3">
          <span>{order.symbol}</span>
          <Badge variant={order.type === "Buy" ? "default" : "secondary"}>
            {order.type}
          </Badge>
          <Badge
            variant={
              order.status === "Pending"
                ? "outline"
                : order.status === "Partial"
                ? "secondary"
                : "default"
            }
          >
            {order.status}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          Quantity: {order.quantity} @{" "}
          {order.price ? `$${order.price}` : "Market Price"} •{" "}
          {formatDate(order.timestamp)}
        </div>
      </div>
      <Button
        size="sm"
        variant="outline"
        onClick={() => cancelOrder.mutate(order.id)}
      >
        Cancel
      </Button>
    </div>
  );
};

export default PendingOrderTile;
