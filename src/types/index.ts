export interface Asset {
  symbol: string;
  name: string;
  price: number;
  exchange: string;
}

export type OrderType = "Buy" | "Sell";
export type OrderPosition = "Short" | "Long";
export type OrderMode = "Market" | "Limit";
export type OrderStatus = "Pending" | "Partial" | "Closed" | "Canceled"

export interface Order {
  id: string;
  symbol: string;
  type: string;
  quantity: number;
  price?: number;
  status: string;
  timestamp: string;
}
