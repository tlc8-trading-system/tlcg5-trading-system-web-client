import Balances from "../trading/Balances";
import DashboardPagesHeader from "../shared/dashboard-pages-header";
import OrderDetails from "../trading/OrderDetails";
export function PlaceOrderPage() {
  return (
    <div className="space-y-8 max-w-2xl">
      <DashboardPagesHeader
        pageTitle="Place Order"
        pageDescription="Execute a new trade"
      />
      <Balances />
      <OrderDetails />
    </div>
  );
}
