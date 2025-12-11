
import DashboardPagesHeader from "../shared/dashboard-pages-header";
import { TradeHistory } from "../trading/TradingHistory";


export function TradeHistoryPage() {

  return (
    <div className="space-y-8 w-full">
      <div className="flex items-center justify-between">
        <DashboardPagesHeader
        pageTitle="Trade History"
        pageDescription="Review your past trades"
      />
    </div>
      <TradeHistory />
    </div>
  );
}
