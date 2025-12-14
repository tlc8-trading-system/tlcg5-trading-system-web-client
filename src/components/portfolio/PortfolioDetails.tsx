import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TrendingUp, TrendingDown, DollarSign, Activity, AlertCircle, Loader2 } from 'lucide-react';
import DashboardPagesHeader from '../shared/dashboard-pages-header';
import { usePortfolioDetailsQuery } from '../../api/features/portfolios/portfolio-queries';
import { formatDate } from '../../lib/utils';

export function PortfolioDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = usePortfolioDetailsQuery(id);

  if (isLoading) {
    return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;
  }

  if (isError) {
    return <div className="text-red-500">Failed to load portfolios details.</div>;
  }


  const portfolio_response = data?.data
  const portfolio = portfolio_response?.portfolio;

  if (!portfolio) {
    return (
      <DashboardPagesHeader
        pageTitle="Portfolio Not Found"
        pageDescription={`Could not find portfolio with ID: ${id}`}
      />
    );
  }

  <DashboardPagesHeader
    pageTitle={portfolio.title}
    pageDescription={portfolio.description}
  />

  const holdings = portfolio_response.holdings;



  return (
    <div className="space-y-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm">Total Value</CardTitle>
            <DollarSign className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">${portfolio?.value?.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm">Profit/Loss</CardTitle>
            {portfolio.profitLoss >= 0 ? (
              <TrendingUp className="size-4 text-green-500" />
            ) : (
              <TrendingDown className="size-4 text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className={`text-2xl ${portfolio.profitLoss >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
              {portfolio.profitLoss >= 0 ? '+' : ''}${portfolio?.profitLoss?.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {portfolio.profitLossPercent >= 0 ? '+' : ''}{portfolio?.profitLossPercent}% return
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm">Open Positions</CardTitle>
            <Activity className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{portfolio?.assetCount}</div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm">Created At</CardTitle>
            <AlertCircle className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm">{formatDate(portfolio.createdAt)}</div>
          </CardContent>
        </Card>
      </div>


      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Current Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2">Symbol</th>
                  <th className="text-right py-3 px-2">Qty</th>
                  <th className="text-right py-3 px-2">Avg Entry</th>
                  <th className="text-right py-3 px-2">Profit</th>
                </tr>
              </thead>
              <tbody>
                {holdings?.map((holding) => (
                  <tr key={holding.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-2">{holding.asset}</td>
                    <td className="text-right py-4 px-2">{holding.quantity}</td>
                    <td className="text-right py-4 px-2">${holding.currentPrice.toFixed(2)}</td>
                    <td className="text-right py-4 px-2">
                      <div className="flex items-center justify-end gap-1">
                        {holding.profitLoss >= 0 ? (
                          <TrendingUp className="size-3 text-green-500" />
                        ) : (
                          <TrendingDown className="size-3 text-red-500" />
                        )}
                        <span className={holding?.profitLoss >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}>
                          ${Math.abs(holding?.profitLoss)?.toFixed(2)}
                        </span>
                        <span className='text-xs text-muted-foreground mt-1' >
                          {holding?.profitLossPercent >= 0 ? '+' : ''}{holding?.profitLossPercent?.toFixed(2)}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {holdings?.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                This portfolio has no current holdings.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}