import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { mockTradeHistory } from '../../data/mock-trading-history';
import { Search, TrendingUp, TrendingDown } from 'lucide-react';

export function TradeHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'All' | 'Profit' | 'Loss'>('All');

  const filteredTrades = mockTradeHistory.filter(trade => {
    const matchesSearch = trade.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = 
      filter === 'All' || 
      (filter === 'Profit' && trade.profitLoss >= 0) ||
      (filter === 'Loss' && trade.profitLoss < 0);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8">

      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <CardTitle>Closed Trades</CardTitle>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search symbol..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-[200px]"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('All')}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    filter === 'All' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('Profit')}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    filter === 'Profit' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  Profit
                </button>
                <button
                  onClick={() => setFilter('Loss')}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    filter === 'Loss' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  Loss
                </button>
              </div>
            </div>
          </div>
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
                  <th className="text-right py-3 px-2">Exit</th>
                  <th className="text-right py-3 px-2">P/L</th>
                  <th className="text-left py-3 px-2">Dates</th>
                  <th className="text-left py-3 px-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrades.map((trade) => (
                  <tr key={trade.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-2">
                      {trade.symbol}
                    </td>
                    <td className="py-4 px-2">
                      <Badge variant={trade.type === 'Long' ? 'default' : 'secondary'}>
                        {trade.type}
                      </Badge>
                    </td>
                    <td className="text-right py-4 px-2">{trade.quantity}</td>
                    <td className="text-right py-4 px-2">${trade.entryPrice.toFixed(2)}</td>
                    <td className="text-right py-4 px-2">${trade.exitPrice.toFixed(2)}</td>
                    <td className="text-right py-4 px-2">
                      <div className="flex items-center justify-end gap-1">
                        {trade.profitLoss >= 0 ? (
                          <TrendingUp className="size-3 text-green-500" />
                        ) : (
                          <TrendingDown className="size-3 text-red-500" />
                        )}
                        <span className={trade.profitLoss >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}>
                          ${Math.abs(trade.profitLoss).toFixed(2)}
                        </span>
                        <span className="text-xs text-muted-foreground ml-1">
                          ({trade.profitLossPercent >= 0 ? '+' : ''}{trade.profitLossPercent}%)
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="text-xs text-muted-foreground space-y-0.5">
                        <div>Open: {new Date(trade.openDate).toLocaleDateString()}</div>
                        <div>Close: {new Date(trade.closeDate).toLocaleDateString()}</div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <Badge variant="outline">{trade.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredTrades.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No trades found matching your criteria
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
