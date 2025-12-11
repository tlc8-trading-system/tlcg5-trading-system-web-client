import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { mockPortfolioDetails } from '../../data/mock-portfolios';
import { TrendingUp, TrendingDown, DollarSign, Activity, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { performanceData } from '../../data/mock-performance';
import DashboardPagesHeader from '../shared/dashboard-pages-header';

export function PortfolioDetails() {
  const { id } = useParams<{ id: string }>();
  const portfolio = mockPortfolioDetails.find(p => p.id === id);

  if (!portfolio) {
    return (
      <DashboardPagesHeader
        pageTitle="Portfolio Not Found"
        pageDescription={`Could not find portfolio with ID: ${id}`}
      />
    );
  }

  <DashboardPagesHeader
    pageTitle={portfolio.name}
    pageDescription={portfolio.description}
  />


  const { holdings } = portfolio;


  return (
    <div className="space-y-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm">Total Value</CardTitle>
            <DollarSign className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">${portfolio.value.toLocaleString()}</div>
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
              {portfolio.profitLoss >= 0 ? '+' : ''}${portfolio.profitLoss.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {portfolio.profitLossPercent >= 0 ? '+' : ''}{portfolio.profitLossPercent}% return
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm">Open Positions</CardTitle>
            <Activity className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{portfolio.count}</div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm">Last Updated</CardTitle>
            <AlertCircle className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm">{new Date(portfolio.lastUpdated).toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart*/}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Performance History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="date"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                  formatter={(value: any) => [`$${value.toLocaleString()}`, 'Value']}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Holdings*/}
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
                  <th className="text-left py-3 px-2">Type</th>
                  <th className="text-right py-3 px-2">Qty</th>
                  <th className="text-right py-3 px-2">Entry</th>
                  <th className="text-right py-3 px-2">Current</th>
                  <th className="text-right py-3 px-2">P/L</th>
                  <th className="text-left py-3 px-2">Open Date</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding) => (
                  <tr key={holding.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-2">{holding.symbol}</td>
                    <td className="py-4 px-2">
                      <Badge variant={holding.type === 'equity' ? 'default' : 'secondary'}>
                        {holding.type.charAt(0).toUpperCase() + holding.type.slice(1)}
                      </Badge>
                    </td>
                    <td className="text-right py-4 px-2">{holding.quantity}</td>
                    <td className="text-right py-4 px-2">${holding.entryPrice.toFixed(2)}</td>
                    <td className="text-right py-4 px-2">${holding.currentPrice.toFixed(2)}</td>
                    <td className="text-right py-4 px-2">
                      <div className="flex items-center justify-end gap-1">
                        {holding.profitLoss >= 0 ? (
                          <TrendingUp className="size-3 text-green-500" />
                        ) : (
                          <TrendingDown className="size-3 text-red-500" />
                        )}
                        <span className={holding.profitLoss >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}>
                          ${Math.abs(holding.profitLoss).toFixed(2)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-sm text-muted-foreground">
                      {new Date(holding.openDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {holdings.length === 0 && (
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