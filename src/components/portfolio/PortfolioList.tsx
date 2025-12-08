import { useNavigate } from "react-router-dom";
import { Activity, TrendingDown, TrendingUp } from "lucide-react";
import { mockPortfolios } from "../../data/mock-portfolios";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function PortfolioList() {
const navigate = useNavigate();

return (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPortfolios.map((portfolio) => (
            <Card
                key={portfolio.id}
                className="transition-shadow cursor-pointer"
                onClick={() => navigate(`/portfolio/detail/${portfolio.id}`)}>

                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>{portfolio.name}</span>
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
                            {portfolio.openPositions} open positions
                        </span>
                        <span className="text-xs text-muted-foreground">
                            Updated {new Date(portfolio.lastUpdated).toLocaleString()}
                        </span>
                    </div>
                </CardContent>


            </Card>
        ))}
    </div>
</div>
);
}