import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Input } from "../../ui/input";
import { Search, TrendingUp, TrendingDown } from "lucide-react";
import { profitLoss } from "../../../services/order-service";
import DashboardPagesHeader from "../../shared/dashboard-pages-header";
import { useAllOrders } from "../../../api/features/orders/order-queries";
import type { ServerActiveTrade as Order } from "../../../types/server";
import { Spinner } from "../../ui/spinner";
import type { OrderStatus } from "../../../types";

export default function TradesList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const { data, isLoading, error } = useAllOrders();
  const navigate = useNavigate();

  let allOrders: Order[] = [];
  if (data?.data) allOrders = data.data;
  if (error) allOrders = [];

  const filteredTrades = allOrders.filter((trade) => {
    const matchesSearch =
      trade.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || trade.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: allOrders.length,
    OPEN: allOrders.filter((t) => t.status === "OPEN").length,
    FILLED: allOrders.filter((t) => t.status === "FILLED").length,
    CANCELLED: allOrders.filter((t) => t.status === "CANCELLED").length,
    REJECTED: allOrders.filter((t) => t.status === "REJECTED").length,
  };

  const getStatusVariant = (status: OrderStatus) => {
    switch (status) {
      case "PENDING":
        return "default";
      case "FILLED":
        return "default";
      case "CANCELLED":
        return "secondary";
      case "REJECTED":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case "PENDING":
        return "text-blue-600 dark:text-blue-400";
      case "FILLED":
        return "text-green-600 dark:text-green-400";
      case "CANCELLED":
        return "text-gray-600 dark:text-gray-400";
      case "REJECTED":
        return "text-red-600 dark:text-red-400";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-8">
      <DashboardPagesHeader
        pageTitle="Trades"
        pageDescription="Monitor all trading activity"
      />

      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <CardTitle>All Trades ({filteredTrades.length})</CardTitle>
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search trades..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-[300px]"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant={statusFilter === "all" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setStatusFilter("all")}
              >
                All ({statusCounts.all})
              </Badge>
              <Badge
                variant={statusFilter === "OPEN" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setStatusFilter("OPEN")}
              >
                Open ({statusCounts.OPEN})
              </Badge>
              <Badge
                variant={statusFilter === "FILLED" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setStatusFilter("FILLED")}
              >
                Filled ({statusCounts.FILLED})
              </Badge>
              <Badge
                variant={statusFilter === "CANCELLED" ? "outline" : "outline"}
                className="cursor-pointer"
                onClick={() => setStatusFilter("CANCELLED")}
              >
                Cancelled ({statusCounts.CANCELLED})
              </Badge>
              <Badge
                variant={statusFilter === "REJECTED" ? "outline" : "outline"}
                className="cursor-pointer"
                onClick={() => setStatusFilter("REJECTED")}
              >
                Failed ({statusCounts.REJECTED})
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            {!isLoading && (
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2">Symbol</th>
                    <th className="text-left py-3 px-2">Type</th>
                    <th className="text-right py-3 px-2">Quantity</th>
                    <th className="text-right py-3 px-2">Entry Price</th>
                    <th className="text-right py-3 px-2">Current Price</th>
                    <th className="text-right py-3 px-2">P/L</th>
                    <th className="text-left py-3 px-2">Status</th>
                    <th className="text-left py-3 px-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTrades.map((trade) => (
                    <tr
                      key={trade.id}
                      className="border-b border-border hover:bg-muted/30 transition-colors cursor-pointer"
                      onClick={() => navigate(`/admin/trades/${trade.id}`)}
                    >
                      <td className="py-4 px-2">
                        <div className="font-semibold">{trade.product}</div>
                      </td>
                      <td className="py-4 px-2">
                        <Badge variant="outline" className="capitalize">
                          {trade.type}
                        </Badge>
                      </td>
                      <td className="text-right py-4 px-2">
                        {trade.quantity.toLocaleString()}
                      </td>
                      <td className="text-right py-4 px-2">
                        USD {trade.price.toFixed(2)}
                      </td>
                      <td className="text-right py-4 px-2">
                        {trade.price ? `USD ${trade.price.toFixed(2)}` : "-"}
                      </td>
                      <td className="text-right py-4 px-2">
                        {profitLoss(trade) !== null && profitLoss(trade) !== undefined ? (
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
                              {profitLoss(trade) >= 0 ? "+" : ""}USD{" "}
                              {Math.abs(profitLoss(trade)).toLocaleString()}
                            </span>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="py-4 px-2">
                        <Badge
                          variant={getStatusVariant(
                            trade.status as OrderStatus
                          )}
                          className={getStatusColor(
                            trade.status as OrderStatus
                          )}
                        >
                          {trade.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-2">
                        <div className="text-sm">
                          {new Date("trade.date").toLocaleDateString()}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {new Date("trade.date").toLocaleTimeString()}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {!isLoading && filteredTrades.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No trades found matching your criteria
            </div>
          )}

          {isLoading && <Spinner />}
        </CardContent>
      </Card>
    </div>
  );
}
