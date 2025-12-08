import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import ActiveTrades from "../trading/ActiveTrades";
import PendingOrders from "../trading/PendingOrders";
import DashboardPagesHeader from "../shared/dashboard-pages-header";

export function OrdersPage() {
  return (
    <div className="space-y-8">
      <DashboardPagesHeader
        pageTitle="Orders"
        pageDescription="Manage your orders and active positions"
      />

      <Tabs defaultValue="positions" className="space-y-6">
        <TabsList>
          <TabsTrigger value="positions">Active Positions</TabsTrigger>
          <TabsTrigger value="pending">Pending Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="positions" className="space-y-4">
          <ActiveTrades />
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <PendingOrders />
        </TabsContent>
      </Tabs>
    </div>
  );
}
