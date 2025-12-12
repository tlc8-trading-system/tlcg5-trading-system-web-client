import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { useFetchTradingHistory } from '../../api/features/trading-history/trading-queries';
import { Loader2 } from 'lucide-react';

export function TradeHistory() {
  const { data, isLoading ,isError } = useFetchTradingHistory();
  const TradingHistory= data?.data;

  if (isLoading) {
    return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;
  }
  
if (isError) {
    return <div className="text-red-500">Failed to load portfolios.</div>;
  }

  if (!data){
    return 
  }
  return (
    <div className="space-y-8">

      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <CardTitle>Closed Trades</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2">Product</th>
                  <th className="text-left py-3 px-2">Side</th>
                  <th className="text-left py-3 px-2">Type</th>
                  <th className="text-right py-3 px-2">Qty</th>
                  <th className="text-left py-3 px-2">Price</th>
                  <th className="text-left py-3 px-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {TradingHistory?.map((trade) => (
                  <tr key={trade.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-2">
                      {trade.product}
                    </td>
                    <td className='py-4 px-2'>
                      <Badge variant={trade.side === 'Long' ? 'default' : 'secondary'}>
                      {trade.type}
                    </Badge>
                    </td>
                    <td className="py-4 px-2">
                      <Badge variant={trade.type === 'Long' ? 'default' : 'secondary'}>
                        {trade.type}
                      </Badge>
                    </td>
                    <td className="text-right py-4 px-2">{trade.quantity}</td>
                    <td className="text-right py-4 px-2">${trade.price.toFixed(2)}</td>
                    <td className="py-4 px-2">
                      <Badge variant="outline">{trade.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {TradeHistory.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No trades found
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
