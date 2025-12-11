import type { OrderMode, OrderType } from ".";

export interface ServerResponse<T> {
  message: string;
  data: T | null;
}

export interface PlaceOrderRequest {
  product: string;
  quantity: string;
  price?: string;
  side: "BUY" | "SELL";
  type: "MARKET" | "LIMIT";
}

export const getOrderSide = (orderType: OrderType) => {
  if (orderType == "Buy") {
    return "BUY";
  } else {
    return "SELL";
  }
};

export const getOrderType = (orderMode: OrderMode) => {
  if (orderMode == "Limit") {
    return "LIMIT";
  } else {
    return "MARKET";
  }
};

export interface ServerActiveTrade {
  id: string;
  product: string;
  side: string;
  type: string;
  quantity: number;
  price: number;
  status: string;
}
