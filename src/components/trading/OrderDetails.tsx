import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Search } from "lucide-react";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { type OrderMode, type OrderType } from "../../types";
import AssetList from "./AssetList";
import {
  getOrderSide,
  getOrderType,
  type PlaceOrderRequest,
  type ServerAsset,
} from "../../types/server";
import { checkIfUserOwnsAsset } from "../../services/order-service";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePlaceOrder } from "../../api/features/pending-orders/pending-order-queries";
import { useAvailableAssets } from "../../api/features/assets/assets-queries";
import { useMyPortfolios } from "../../api/features/portfolios/portfolios-queries";

const OrderDetails = () => {
  const navigate = useNavigate();
  const [asset, setAsset] = useState<ServerAsset | null>(null);
  const [ticker, setTicker] = useState("");
  const [orderType, setOrderType] = useState<OrderType>("Buy");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [orderMode, setOrderMode] = useState<OrderMode>("Market");
  const [showAssetList, setShowAssetList] = useState(false);
  const [assetSearch, setAssetSearch] = useState("");
  const [tradelimit, setTradeLimit] = useState(0);
  const [selectedPortfolio, setSelectedPortfolio] = useState("");

  const { data, isLoading, error } = useAvailableAssets();
  const { data: portfolioData } = useMyPortfolios();

  let tradingAssets =
    orderType === "Buy"
      ? data?.data?.bestBuyAssets
      : data?.data?.bestSellAssets;
  if (!tradingAssets || error) tradingAssets = [];

  let portfolios = portfolioData?.data;
  if (!portfolios) portfolios = [];

  const orderDescription =
    orderMode === "Market"
      ? `${orderType} ${quantity} ${ticker} at market price`
      : `${orderType} ${quantity} ${ticker} @ $${price} (limit)`;

  const placeOrder = usePlaceOrder(orderDescription, navigate);

  const total = Number(quantity) * Number(price || 0);

  const filteredAssets: ServerAsset[] = tradingAssets.filter(
    (s) =>
      s.TICKER.toLowerCase().includes(assetSearch.toLowerCase()) ||
      s.TICKER.toLowerCase().includes(assetSearch.toLowerCase())
  );

  const reset = () => {
    setQuantity("");
    setPrice("");
  };

  const handleAssetSelect = (selectedAsset: (typeof tradingAssets)[0]) => {
    setAsset(selectedAsset);
    setTicker(selectedAsset.TICKER);
    setPrice(selectedAsset.LAST_TRADED_PRICE.toString());
    setAssetSearch("");
    setTradeLimit(
      orderType === "Buy" ? selectedAsset.BUY_LIMIT : selectedAsset.SELL_LIMIT
    );
    setQuantity(tradelimit.toString());
    setShowAssetList(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrder: PlaceOrderRequest = {
      product: ticker,
      side: getOrderSide(orderType),
      type: getOrderType(orderMode),
      quantity: +quantity,
      price: +price,
      portfolioId: selectedPortfolio,
    };

    placeOrder.mutate(newOrder);
  };

  return (
    <Card className="shadow-sm text-left">
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/** Choose order type: BUY / SELL */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Order Type</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant={orderType === "Buy" ? "default" : "outline"}
                  onClick={() => {
                    reset();
                    setOrderType("Buy");
                  }}
                  className="h-11"
                >
                  Buy
                </Button>
                <Button
                  type="button"
                  variant={orderType === "Sell" ? "default" : "outline"}
                  onClick={() => {
                    reset();
                    setOrderType("Sell");
                  }}
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
                  variant={orderMode === "Market" ? "default" : "outline"}
                  onClick={() => {
                    reset();
                    setOrderMode("Market");
                  }}
                  className="h-11"
                >
                  Market
                </Button>
                <Button
                  type="button"
                  variant={orderMode === "Limit" ? "default" : "outline"}
                  onClick={() => {
                    reset();
                    setOrderMode("Limit");
                  }}
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
              <Label htmlFor="asset">Asset</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground z-10" />
                <Input
                  id="asset"
                  placeholder="Search assets..."
                  value={ticker || assetSearch}
                  onChange={(e) => {
                    const value = e.target.value.toUpperCase();
                    if (ticker) {
                      setTicker(value);
                    } else {
                      setAssetSearch(value);
                    }
                    setShowAssetList(true);
                  }}
                  onFocus={() => setShowAssetList(true)} // TODO: on focus, refetch :)
                  className="pl-10"
                  autoComplete="off"
                  required
                />
              </div>

              {showAssetList &&
                (assetSearch || !ticker) &&
                (isLoading ? (
                  <div className="absolute z-20 w-full mt-1 bg-card border border-border rounded-md shadow-lg max-h-64 overflow-y-auto min-h-32 flex items-center justify-center">
                    Loading...
                  </div>
                ) : (
                  <>
                    {error && (
                      <p className="text-sm text-destructive">
                        Failed to fetch available trading assets, showing mock
                        data
                      </p>
                    )}
                    <AssetList
                      filteredAssets={filteredAssets}
                      handleStockSelect={handleAssetSelect}
                      showAssetList={setShowAssetList}
                    />
                  </>
                ))}
            </div>

            {/** Choose quantity and price */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="100"
                  value={quantity}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (val > tradelimit) return;
                    setQuantity(val.toString());
                  }}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">
                  {orderMode === "Market" ? "Est. Price" : "Limit Price"}
                </Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={(+price).toFixed(2)}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (asset) {
                      if (
                        val <
                          asset?.LAST_TRADED_PRICE - asset?.MAX_PRICE_SHIFT ||
                        val > asset?.LAST_TRADED_PRICE + asset.MAX_PRICE_SHIFT
                      ) {
                        return;
                      }
                      setPrice(val.toString());
                    }
                  }}
                  required
                  disabled={orderMode == "Market"}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/** Choose portfolio trade should belong */}
          <div className="space-y-2">
            <Label htmlFor="portfolio">Portfolio</Label>
            <Select
              value={selectedPortfolio}
              onValueChange={setSelectedPortfolio}
              defaultValue={portfolios[0]?.title}
            >
              <SelectTrigger id="portfolio" className="w-full">
                <SelectValue placeholder="Select portfolio..." />
              </SelectTrigger>
              <SelectContent className="w-full">
                {portfolios.map((portfolio) => (
                  <SelectItem key={portfolio.id} value={portfolio.id}>
                    {portfolio.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/** Order summary before submission */}
          <div className="space-y-3 rounded-lg bg-muted/50 p-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Quantity</span>
              <span>{quantity || 0}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Price per share</span>
              <span>${Number(price || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Position Type</span>
              <Badge variant={checkIfUserOwnsAsset() ? "default" : "secondary"}>
                {checkIfUserOwnsAsset() ? "Long" : "Short"}
              </Badge>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-lg">
                $
                {total.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              type="submit"
              className="flex-1 h-12"
              disabled={!ticker || !quantity || !price}
            >
              Submit Order
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setTicker("");
                setQuantity("");
                setPrice("");
                setAssetSearch("");
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default OrderDetails;
