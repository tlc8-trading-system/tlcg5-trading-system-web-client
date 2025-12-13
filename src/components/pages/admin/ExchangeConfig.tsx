import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Switch } from '../../ui/switch';
import type { Exchange } from '../../../types';
import { ToggleExchangeStatus, useFetchExchanges } from '../../../api/features/exchanges/exchanges-queries';
import DashboardPagesHeader from '../../shared/dashboard-pages-header';

export function ExchangeConfig() {
  const { data } = useFetchExchanges();
  const { mutate: updateExchange, isPending } = ToggleExchangeStatus();

  const exchanges = data?.data;

  const handleToggle = (exchange: Exchange) => {
    const updatedExchange: Exchange = {
      ...exchange,
      enabled: !exchange.enabled
    };

    updateExchange(updatedExchange);
  }

  return (

    <div className="space-y-8">
      <DashboardPagesHeader
        pageTitle="Trades"
        pageDescription="Monitor all trading activity">

      </DashboardPagesHeader>


      <div className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-8">
        <div className="space-y-8">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Exchange List</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exchanges?.map((exchange) => (
                  <div key={exchange.id} className="flex items-center p-4 rounded-lg border border-border">
                    <div className="flex items-center justify-between w-full">
                      <a href={exchange.baseUrl} target="_blank" rel="noopener noreferrer" className="block hover:underline">
                        <h3 className="font-medium">{exchange.name}</h3>
                      </a>

                      <div className="flex items-center gap-4 ml-6">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Enable</span>
                          <Switch
                            checked={exchange.enabled}
                            onCheckedChange={() => handleToggle(exchange)}
                            disabled={isPending}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

  );
}