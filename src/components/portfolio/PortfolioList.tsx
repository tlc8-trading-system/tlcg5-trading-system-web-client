import { useNavigate } from "react-router-dom";
import { Activity, Loader2, TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { usePortfoliosQuery } from "../../api/features/portfolios/portfolio-queries";

export function PortfolioList() {
const navigate = useNavigate();
const { data: portfolios, isLoading ,isError } = usePortfoliosQuery();

if (isLoading) {
    return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;
  }
  
if (isError) {
    return <div className="text-red-500">Failed to load portfolios.</div>;
  }

return (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios?.map((portfolio) => (
            <Card
                key={portfolio.id}
                className="transition-shadow cursor-pointer"
                onClick={() => navigate(`/portfolio/details/${portfolio.id}`)}>

                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>{portfolio.title}</span>
                        <span>{portfolio.title}</span>
                        <Activity className="size-4 text-muted-foreground" />
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-baseline justify-between">
                            <span className="text-sm text-muted-foreground">Total Value</span>
                            <span className="text-2xl">${portfolio.value.toLocaleString()}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">P/L</span>
                            <div className="flex items-center gap-1">
                                {portfolio.profitLoss >= 0 ? (
                                    <TrendingUp className="size-3 text-green-500" />
                                ) : (
                                    <TrendingDown className="size-4 text-red-500" />
                                )
                                }

                                <span className={portfolio.profitLoss >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}>
                                    {portfolio.profitLoss >= 0 ? '+' : ''}{portfolio.profitLoss.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                            {portfolio.count} open positions
                        </span>
                    </div>
                </CardContent>


            </Card>
        ))}
    </div>
</div>
);
}