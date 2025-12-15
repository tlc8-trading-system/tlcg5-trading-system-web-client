import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowLeft, Mail, TrendingUp, TrendingDown } from "lucide-react";
import { useClient } from "../../api/features/admin/admin-queries";
import { PortfolioList } from "../portfolio/PortfolioList";
import ActiveTrades from "../trading/ActiveTrades";
import PendingOrders from "../trading/PendingOrders";

export default function ClientDetails() {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useClient(clientId);

  const client = data?.data;

  if (!client || error) {
    return (
      <div className="space-y-8">
        <div>
          <h1>Client Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 text-left">
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigate("/admin/clients")}
      >
        <ArrowLeft className="size-4 mr-2" />
        Back
      </Button>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <h1>{isLoading ? "..." : client.firstname + " " + client.lastname}</h1>
          <p className="text-muted-foreground mt-1">
            Client details and activity
          </p>
        </div>
      </div>

      {/* Customer Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4" />
                <span>Email</span>
              </div>
              <div>{client.email}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Role</div>
              <Badge variant="outline" className="capitalize">
                {client.role}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">
              ${client.totalValue.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total P/L</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`text-2xl flex items-center gap-2 ${
                client.profitLoss >= 0
                  ? "text-green-600 dark:text-green-500"
                  : "text-red-600 dark:text-red-500"
              }`}
            >
              {client.profitLoss >= 0 ? (
                <TrendingUp className="size-5" />
              ) : (
                <TrendingDown className="size-5" />
              )}
              {client.profitLoss >= 0 ? "+" : ""}${client.profitLoss?.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Active Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{client.activeTradesCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Portfolios */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Portfolios ({client.portfolioCount})</CardTitle>
        </CardHeader>
        <CardContent>
          <PortfolioList />
        </CardContent>
      </Card>
      <ActiveTrades clientId={clientId} />
      <PendingOrders clientId={clientId} />
    </div>
  );
}
