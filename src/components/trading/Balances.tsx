import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useUserBalance } from "../../api/features/user-balance/balance-queries";

const Balances = () => {
  const { data, isLoading, error } = useUserBalance();
  console.log("balace: ", data?.data);
  
  let balance = data?.data;
  if(error) balance = 0
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm">Available Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-right">
            $
            {isLoading
              ? "..."
              : JSON.stringify(data?.data) == undefined
              ? balance
              : JSON.stringify(data?.data)}
              {error && <p className="text-sm text-destructive">Failed to fetch user balance</p>}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm">Current Balance</CardTitle>
          <TrendingUp className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-right">$200,000</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Balances;
