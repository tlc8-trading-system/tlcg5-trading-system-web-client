import Balances from "../trading/Balances";
import DashboardPagesHeader from "../shared/dashboard-pages-header";
import OrderDetails from "../trading/OrderDetails";
import { useAvailableAssets } from "../../api/features/assets/assets-queries";
import { mockTradingAssets } from "../../data/mock-assets";
import { useMyPortfolios } from "../../api/features/portfolios/portfolios-queries";

export function PlaceOrderPage() {
  const { data, isLoading, error } = useAvailableAssets();
  const {
    data: portfolioData,
    // isLoading: portfolioIsLoading,
    // error: portfolioError,
  } = useMyPortfolios();

  let tradingAssets = data?.data;
  if (!tradingAssets) tradingAssets = mockTradingAssets;

  let portfolios = portfolioData?.data;
  if (!portfolios) portfolios = [];

  return (
    <div className="space-y-8 max-w-2xl">
      <DashboardPagesHeader
        pageTitle="Place Order"
        pageDescription="Execute a new trade"
      />
      <Balances />
      <OrderDetails
        portfolios={portfolios}
        tradingAssets={tradingAssets}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
