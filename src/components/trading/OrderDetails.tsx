import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Search } from "lucide-react";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

const OrderDetails = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/** Choose order type: BUY / SELL */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Order Type</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant="default"
                  onClick={() => {}}
                  className="h-11"
                >
                  Buy
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {}}
                  className="h-11"
                >
                  Sell
                </Button>
              </div>
            </div>

            {/** Choose order mode: MARKET / LIMIT */}
            <div className="space-y-2">
              <Label>Order Mode</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant="default"
                  onClick={() => {}}
                  className="h-11"
                >
                  Market
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {}}
                  className="h-11"
                >
                  Limit
                </Button>
              </div>
            </div>
          </div>

          {/** Choose asset to trade */}
          <div className="space-y-4">
            <div className="space-y-2 relative">
              <Label htmlFor="symbol">Asset</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground z-10" />
                <Input
                  id="symbol"
                  placeholder="Search symbols..."
                  onChange={() => {}}
                  onFocus={() => {}}
                  className="pl-10"
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            {/** Choose quantity and price */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="100"
                  onChange={() => {}}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Est. Price</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  onChange={() => {}}
                  required
                />
              </div>
            </div>
          </div>

          <Separator />

          {/** Order summary before submission */}
          <div className="space-y-3 rounded-lg bg-muted/50 p-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Quantity</span>
              <span>0</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Price per share</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Position Type</span>
              <Badge variant="secondary">Buy</Badge>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-lg">$0</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="flex-1 h-12" disabled>
              Submit Order
            </Button>
            <Button type="button" variant="outline" onClick={() => {}}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default OrderDetails;
