import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Input } from "../../ui/input";
import { Search, TrendingUp, TrendingDown } from "lucide-react";
import DashboardPagesHeader from "../../shared/dashboard-pages-header";
import { useAllClients } from "../../../api/features/admin/admin-queries";
import type { Client } from "../../../types";
import { Spinner } from "../../ui/spinner";

export default function ClientsList() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { data, isLoading, error } = useAllClients();

  let allClients: Client[] = [];
  if (data?.data) allClients = data.data;
  if (error) allClients = [];

  const filteredCustomers = allClients.filter(
    (customer) =>
      customer.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <DashboardPagesHeader
        pageTitle="Clients"
        pageDescription="Manage customer accounts"
      />

      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <CardTitle>All Clients ({filteredCustomers.length})</CardTitle>
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-[300px]"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {!isLoading && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th
                      className="text-left py-3 px-2"
                      onClick={() => console.log(allClients[0].activeTradesCount)}
                    >
                      Client
                    </th>
                    <th className="text-left py-3 px-2">Role</th>
                    <th className="text-right py-3 px-2">Total Value</th>
                    <th className="text-right py-3 px-2">P/L</th>
                    <th className="text-center py-3 px-2">Portfolios</th>
                    <th className="text-center py-3 px-2">Active Trades</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((customer) => (
                    <tr
                      key={customer.userId}
                      className="border-b border-border hover:bg-muted/30 transition-colors cursor-pointer"
                      onClick={() =>
                        navigate(`/admin/clients/${customer.userId}`)
                      }
                    >
                      <td className="py-4 px-2">
                        <div>
                          <div>
                            {customer.firstname + " " + customer.lastname}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {customer.email}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <Badge variant="outline" className="capitalize">
                          {customer.role}
                        </Badge>
                      </td>
                      <td className="text-right py-4 px-2">
                        {/* ${customer.totalValue.toLocaleString()} */} 100,000
                      </td>
                      <td className="text-right py-4 px-2">
                        <div className="flex items-center justify-end gap-1">
                          {+customer.profitLoss >= 0 ? (
                            <TrendingUp className="size-3 text-green-500" />
                          ) : (
                            <TrendingDown className="size-3 text-red-500" />
                          )}
                          <span
                            className={
                              +customer.profitLoss >= 0
                                ? "text-green-600 dark:text-green-500"
                                : "text-red-600 dark:text-red-500"
                            }
                          >
                            {customer.profitLoss >= 0 ? "+" : ""}$
                            {Math.abs(customer.profitLoss).toLocaleString()}
                          </span>
                        </div>
                      </td>
                      <td className="text-center py-4 px-2">
                        {customer.portfolioCount}
                      </td>
                      <td className="text-center py-4 px-2">
                        {customer.activeTradesCount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {!isLoading && filteredCustomers.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No clients found matching your search
            </div>
          )}

          {isLoading && (
            <div className="w-full flex items-center justify-center">
              <Spinner />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
