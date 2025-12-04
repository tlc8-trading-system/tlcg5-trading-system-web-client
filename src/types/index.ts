export interface Asset {
  symbol: string;
  name: string;
  price: number;
  exchange: string;
}

export type OrderType = "Buy" | "Sell";
export type OrderMode = "Market" | "Limit";
