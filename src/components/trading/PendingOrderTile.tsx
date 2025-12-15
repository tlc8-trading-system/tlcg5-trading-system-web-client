import { CancelOrder } from "../../api/features/pending-orders/pending-order-queries";
import { formatDate } from "../../lib/utils";
import type { ServerActiveTrade as PendingOrder } from "../../types/server";
import { useState } from "react";
import type { ModifyActiveTrade as IModifyActiveTrade } from "../../types";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ModifyTrade from "../modals/ModifyTrade";
import { ModifyActiveTrade } from "../../api/features/active-orders/active-order-queries";
import { Edit2 } from "lucide-react";

interface PendingOrderTileProps {
  order: PendingOrder;
}

const PendingOrderTile: React.FC<PendingOrderTileProps> = ({ order }) => {
  const [modifyTrade, setModifyTrade] = useState(false);
  const [modifyTradeData, setModifyTradeData] = useState<IModifyActiveTrade>({
    id: order.id,
    type: order.type,
    quantity: order.quantity,
    price: order.price,
  });
  const modifyActiveTrade = ModifyActiveTrade();

  const cancelOrder = CancelOrder();

  const saveTradeModification = () => {
    modifyActiveTrade.mutate(modifyTradeData);
    setModifyTrade(false);
  };

  return (
    <div
      key={order.id}
      className="flex items-center justify-between p-4 rounded-lg border border-border"
    >
      <div className="flex-1 space-y-2 text-left">
        <div className="flex items-center gap-3">
          <span>{order.product}</span>
          <Badge variant={order.side === "BUY" ? "default" : "secondary"}>
            {order.side}
          </Badge>
          <Badge variant={order.type === "MARKET" ? "default" : "secondary"}>
            {order.type}
          </Badge>
          {/* <Badge
            variant={
              order.status === "Pending"
                ? "outline"
                : order.status === "Partial"
                ? "secondary"
                : "default"
            }
          >
            {order.status}
          </Badge> */}
        </div>
        <div className="text-sm text-muted-foreground">
          Quantity: {order.quantity} @{" "}
          {order.price ? `$${order.price}` : "Market Price"} •{" "}
          {formatDate(order.createdAt)}
        </div>
      </div>
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
      <Button
        size="sm"
        variant="outline"
        onClick={() => cancelOrder.mutate(order.id)}
      >
        Cancel
      </Button>
      <ModifyTrade
        trade={order}
        handleSaveModify={saveTradeModification}
        modifyData={modifyTradeData}
        setModifyData={setModifyTradeData}
        setShowModifyDialog={setModifyTrade}
        showModifyDialog={modifyTrade}
      />
    </div>
  );
};

export default PendingOrderTile;
